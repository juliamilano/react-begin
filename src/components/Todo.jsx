import React from 'react';

import PropTypes from 'prop-types';

import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';

function Todo(props) {

    return (
        <div className={`todo ${props.completed ? 'completed' : ''}`}>
            <Checkbox initiallyChecked="props.completed" />

            <span className="todo-title" style={{}}>{props.title}</span>

            <Button  className="delete icon" icon="delete" />
        </div>
    );
};
Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo;