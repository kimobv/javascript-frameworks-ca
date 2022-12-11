import PropTypes from 'prop-types';

export default function ValError({ children }) {
	return <div className="form__message--error">{children}</div>;
}
ValError.propTypes = {
	children: PropTypes.node.isRequired,
};
