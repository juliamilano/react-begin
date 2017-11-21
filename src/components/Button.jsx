import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className="props.className">
            <i className="material-icons">{props.icon}</i>
        </button>


    );
}
Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string
};
export default Button;