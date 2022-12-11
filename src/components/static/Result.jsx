import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Result({ id, title, image, alt }) {
	return (
		<>
			<Link to={`detail/${id}`} className="link-page-specific-product">
				<Card>
					<h2>{title}</h2>
					<img src={image} alt={alt} />
				</Card>
			</Link>
		</>
	);
}
Result.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
export default Result;
