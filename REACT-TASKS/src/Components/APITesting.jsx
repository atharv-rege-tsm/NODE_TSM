import React, { useEffect, useState } from 'react'
import axios from 'axios';
const APITesting = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h2>Users 👥</h2>
            {data == null ? (
                <p>Loading... ⏳</p>
            ) : (
                data.map(user => (
                    <div className='p-2 bg-blue font-black text-sm'>
                        <h2 className='text-lg'>{user.name}</h2>
                        <h2>{user.email}</h2>
                    </div>
                ))
            )}
        </>
    )
}

export default APITesting