import React from 'react';
import "./checkbox.css";
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.initiallyChecked
        };
        this.handlClick = this.handlClick.bind(this);
    }
    handlClick(event){
        this.setState({
            checked: !this.state.checked
        })

    }

    render() {
        return (
            <button className="checkbox icon" onClick={this.handlClick}>
                <i className="material-icons">{this.state.checked ? 'checkbox' : "check_box_outline_blank"}</i>
            </button>
        )
    }
}

Checkbox.propTypes = {
    initiallyChecked: PropTypes.bool.isRequired
};
{/*function Checkbox(props) {
    return (

        <button className="checkbox icon">
             <i className="material-icons">{props.checked ? 'checkbox': "check_box_outline_blank"}</i>
        </button>


    );
}
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};
 */}
export default Checkbox;