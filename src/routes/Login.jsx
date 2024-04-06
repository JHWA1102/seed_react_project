import { useState } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    // const axios = require('axios');

    function setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
    }

    // async function loginUser(credentials) {
    //     return fetch('http://localhost:8080/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(credentials)
    //     })
    //     .then(data => data.json())
    // }

    async function loginUser(credentials) {
        console.log(credentials);
        try {
            const response = await axios.post('http://localhost:8080/login', credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // You may handle errors as needed
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        console.log("통과!")
        setToken(token);
        console.log("통과2!")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;