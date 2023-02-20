import React, { useState } from 'react';
import { Link } from "react-router-dom"

export default function () {

    return (
        <section>
            <div className="container">
                <form className="form">
                    <h1>Login</h1>
                    <div className="input-control">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text"></input>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password"></input>
                        <div className="error"></div>
                    </div>
                    <div className='button-group'>
                        <button type="submit">Sign up</button>
                        <Link to="/create-account"><button id="button-text">Don't have an account? Register here.</button></Link>
                    </div>
                </form>
            </div>
        </section>
    )
}