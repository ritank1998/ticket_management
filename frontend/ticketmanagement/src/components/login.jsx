import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const takeEmail = (e) => {
        setEmail(e.target.value);
    };

    const takePassword = (e) => {
        setPassword(e.target.value);
    };

    const submit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const payload = { email, password };

        try {
            const response = await fetch('http://localhost:1203/tickets/signin', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json(); // Extract JSON data from the response
                const { token } = data;

            // Store the token in sessionStorage
                sessionStorage.setItem('token', token);
                window.location.replace('/home'); // Redirect on successful login
            } else {
                alert("Oops! Please try again."); // Show an alert for failed login
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form onSubmit={submit}> {/* Use onSubmit to handle form submission */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={takeEmail} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={takePassword} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default Login;
