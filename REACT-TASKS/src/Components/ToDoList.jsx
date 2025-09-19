import React, { useState } from 'react'

const ToDoList = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(Array(todos.length).fill(false));


  const handleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleSubmit = () => {
    setTodos([...todos, data]);
    setData("");
  }
  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
      <input type="button" onClick={handleSubmit} value="Add Todo" />

      <div className='bg-blue-300 rounded flex flex-col items-center justify-center p-4 gap-8'>
        {todos.map((val, index) => (
          <div key={index} className='flex items-center gap-2'>
            <input type="checkbox" checked={checked[index]} onChange={() => handleCheck(index)} className='h-20 w-4' />
            <span
              className={`bg-white px-4 py-2 rounded shadow ${checked[index] ? 'line-through text-gray-400' : ''}`} >
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ToDoList