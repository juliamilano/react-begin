import React from 'react';
import "./checkbox.css";
import PropTypes from 'prop-types';

function Checkbox(props) {
    return (

        <button className="checkbox icon">
             <i className="material-icons">{props.checked ? 'checkbox': "check_box_outline_blank"}</i>
        </button>


    );
}
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};

export default Checkbox;