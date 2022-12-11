import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from '../static/Heading';
import Result from '../static/Result';
import { Col, Container, Row } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';

const url = BASE_URL + '/wc/store/products';

function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function axiosData() {
			try {
				const response = await axios.get(url);

				if (response.status === 200) {
					setProducts(response.data);
				} else {
					setError('An error occurred');
				}
			} catch (error) {
				setError(error.toString());
				//console.log(error);
			} finally {
				setLoading(false);
			}
		}
		axiosData();
	}, []);
	if (loading) {
		return (
			<div className="load">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
	if (error) {
		//console.log(error);
		return <div>An error has occurred: {error}</div>;
	}
	return (
		<>
			<Heading title="Our bananas" />
			<div className="wrapper">
				<Container>
					<Row gap={5}>
						{products.map((product) => {
							const { id, name } = product;
							const image = product.images[0].src;
							const alt = product.images[0].alt;
							return (
								<Col sm={12} md={6} lg={4} key={id}>
									<Result id={id} title={name} image={image} alt={alt} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Home;
