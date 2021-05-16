import React, {useEffect, useState, useContext} from 'react';
import {CountContext} from '../../store';


const HomePage = () => {
    const [users, setUsers] = useState(null);
    const [count, setCount] = useContext(CountContext);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();

        const listener = event => {
            console.log({event});
        }

        window.addEventListener('mousemove', listener);

        return () => {
            window.removeEventListener('mousemove', listener);
        };

    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(55)}>Set 55</button>
            {
                users ? users.map(user => <p key={user.id}>{user.name}</p>) : <h1>...Loading</h1>
            }
        </div>
    )
}

export default HomePage;
