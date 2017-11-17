import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <header>
            <h1 style={{ fontSize: '50px', color: 'lightblue', margin:'20px'}}>{props.title}</h1>
        </header>
    );
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}
export default Header;