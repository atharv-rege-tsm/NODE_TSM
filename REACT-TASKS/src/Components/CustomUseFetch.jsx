import React, { useEffect, useState } from 'react'

const CustomUseFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let val = await fetch(url).then(res => res.json());
                setData(val);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [url])
    console.log(data);
    return data;
}

export default CustomUseFetch