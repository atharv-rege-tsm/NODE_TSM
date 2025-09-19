import React, { useState } from 'react'

const Login = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        if (input.name === '' || input.email === '' || input.password === '') {
            return alert("Details Should Not Be Empty!!!");
        }
        console.log(input)
    }
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="">Name</label> <br />
            <input onChange={(e) => setInput({ ...input, name: e.target.value })} value={input.name} className="border" type="text" /><br />
            <label htmlFor="">Email</label><br />
            <input onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} className="border" type="email" /><br />
            <label htmlFor="">Password</label><br />
            <input onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} className="border" type="password" /><br />
            <button type='submit'>subnmit</button>
        </form>
    )
}

export default Login