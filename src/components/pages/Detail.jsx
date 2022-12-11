import React, { useState, useEffect } from 'react';
import Heading from '../static/Heading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';

function Detail() {
	const [product, setProduct] = useState(null);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(null);

	let history = useNavigate();

	const { id } = useParams();

	const url = BASE_URL + '/wc/store/products/' + id;

	useEffect(() => {
		async function axioData() {
			try {
				const response = await axios.get(url);
				if (response.status === 200) {
					setProduct(response.data);
				} else {
					if (!id) {
						history(-1);
					}
					setError('An error occurred');
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoad(false);
			}
		}
		axioData();
	});

	if (load) {
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
		return <div>An error occurred: {error}</div>;
	}
	return (
		<>
			<Container key={product.id} className="wrapper">
				<section className="welcome__other--pages"></section>
				<div className="product-detail">
					<img src={product.images[0].thumbnail} alt={product.images[0].alt} className="details-image" />
					<Col>
						<Row>
							<Heading title={product.name} />
						</Row>
						<Row>
							<h2>{product.prices.price},- NOK</h2>
						</Row>
					</Col>
				</div>
			</Container>
		</>
	);
}

export default Detail;
