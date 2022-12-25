import React, { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext';
import TodoForm from './Form/TodoForm';
import TodoList from './List/TodoList';

function Container() {
    const { background, setBackground } = useContext(TodoContext);

    return (
        <div id='container'>
            <div id={`${background}`}>
                {background === 'todoForm' && <div style={{ border: '2px solid black', width: '2rem', textAlign: 'center' }} onClick={() => setBackground(background === 'todoForm' ? 'todoFormDark' : "todoForm")}> <i className="fa-solid fa-moon"></i></div>}
                {background != 'todoForm' && <div style={{ border: '1px solid white', width: '2rem', textAlign: 'center' }} onClick={() => setBackground(background === 'todoForm' ? 'todoFormDark' : "todoForm")}> <i className="fa-solid fa-moon"></i></div>}
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}

export default Container;
