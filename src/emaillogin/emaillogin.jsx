import React, { useState } from "react";
import { login } from "./emailauth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import logo3 from '../codeswearcircle.png'


function Emaillogin() {
    const [form, setform] = useState({ email: "", password: '' })

    const userinput = async (e) => {
        e.preventDefault();
        await login(form)
    }

    return (
        <>
            <div className="email-login">
                <div className="email-login-head">
                    <img src={`${logo3}`} alt="logo"/>
                    <h2>login</h2>
                </div>
                <form onSubmit={userinput}>
                    <label>email</label>
                    <input type="email" onChange={(e) => setform({ ...form, email: e.target.value })} />
                    <label>password</label>
                    <input type="password" onChange={(e) => setform({ ...form, password: e.target.value })} />
                    <button type="submit">submit</button>
                </form>

                <Link to='/register'><h2>registration</h2></Link>
            </div>

        </>
    )
}

export { Emaillogin }