import { createContext, useEffect, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todoValue, setTodoValue] = useState([]);

    const [background, setBackground] = useState(localStorage.getItem('background') || "todoForm");

    const removeTodo = (todoIndex) => {
        const newList = todoValue.filter((_, index) => index != todoIndex);
        setTodoValue(newList)
    };

    const allRemoveTodo = () => {
        setTodoValue((item) => item.filter((todo) => todo.id))
    };

    useEffect(() => {
        const todoValue = localStorage.getItem('todoValue')
        setTodoValue(JSON.parse(todoValue))
    }, [])

    useEffect(() => {
        console.log(todoValue);
        localStorage.setItem('todoValue', JSON.stringify(todoValue))
    });


    useEffect(() => {
        localStorage.setItem('background', background)
    }, [background]);

    useEffect(() => {
        console.log(todoValue);

    }, [todoValue]);

    const values = {
        todoValue,
        setTodoValue,
        removeTodo,
        allRemoveTodo,
        background,
        setBackground,
    }

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
}



export default TodoContext;