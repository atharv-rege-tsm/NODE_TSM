import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button className="bg-black text-white p-2 rounded-lg hover:cursor-pointer" onClick={(e) => { setCount(count + 1) }}>button</button>
        </>
    )
}

export default Counter