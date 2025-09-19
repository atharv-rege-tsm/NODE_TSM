import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './TodoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter something"
                className="border px-4 py-2 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow"
            >
                Submit
            </button>
        </form>
    );
}

export default AddTodo;
