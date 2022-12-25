import React, { useState, useContext } from 'react'
import TodoContext from '../../context/TodoContext';

function TodoForm() {
    const [form, setForm] = useState({ todo: '' });

    const { todoValue, setTodoValue } = useContext(TodoContext)

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === '') {
            alert('Zorunlu Alan.')
            return false;
        }

        setForm({ todo: '' })
        setTodoValue([...todoValue, form]);
        console.log(form);
    }

    return (  
            <form onSubmit={onSubmit} >
                <h2 className='formHeading'>Todo App</h2>
                <div id='inputDiv'>
                    <input
                        type="text"
                        placeholder='Add your new todo'
                        name='todo'
                        value={form.todo}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}

                    />
                    <button>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </form>
    )
}

export default TodoForm;
