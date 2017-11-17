import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

import todos from './todosArr';


const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.title = "ToDo list";
        this.state = {
            list: list,
        };
        this.todos = todos;
    }

  render() {
    return (
        <main>
            {/* {this.state.list.map(item =>
            <Header title={item.title}/>
            )}*/}
            <Header title={this.title}/>

            <section className="todo-list">
                {this.todos.map(todo =>
                    <Todo key={todo.id} title={todo.title} completed={todo.completed}/>
                )}
                <Todo title={"Изучить Angular"} completed={true}/>
                <Todo title={"Изучить React"} completed={false}/>

                {/*<div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>

                    <span className="todo-title">Изучить Реакт</span>

                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>*/}
            </section>



            {/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          {list.map(function(item) {
              return <div>{item.title}</div>;
          })}

          {list.map(function(item) {
              return (
                  <div>
                      <span>
                          <a href={item.url}>{item.title}</a>
                      </span>
                      <span>{item.author}</span>
                      <span>{item.num_comments}</span>
                      <span>{item.points}</span>
                  </div>
              );
          })}

          {list.map(function(item) {
              return (
                  <div key={item.objectID}>
                      <span>
                          <a href={item.url}>{item.title}</a>
                      </span>
                      <span>{item.author}</span>
                      <span>{item.num_comments}</span>
                      <span>{item.points}</span>
                  </div>
              );
          })}

      </div>*/}
        </main>
    );
  }
}
App.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};
App.defaultProps = {
    title: "React todo"
};

export default App;
