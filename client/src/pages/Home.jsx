import React, { useState, useEffect } from 'react';

const API = 'http://localhost:3001/api';

const Home = () => {
    const [message, setMessage] = useState('');

    const fetchData = async () => {
        const response = await fetch(API);
        const data = await response.json();

        setMessage(data.message);
    };

    useEffect(() => {
    fetchData();
    }, []);

    return <div>{message}</div>;
}

export default Home;
