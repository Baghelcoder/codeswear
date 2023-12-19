import React, { useState } from "react";
import { register } from "./emailauth";
import logo3 from '../codeswearcircle.png'


function Emailregister() {
    const [form, setform] = useState({ email: "", password: '' })
    const userinput = async (e) => {
        e.preventDefault();
        await register(form)
    }
    return (
        <>
            <div className="email-login">
                <div className="email-login-head">
                    <img src={`${logo3}`} alt="logo" />
                    <h2>Registration</h2>
                </div>

                <form onSubmit={userinput}>
                    <label>email</label>
                    <input type="email" onChange={(e) => setform({ ...form, email: e.target.value })} />
                    <label>password</label>
                    <input type="password" onChange={(e) => setform({ ...form, password: e.target.value })} />
                    <button type="submit">submit</button>
                </form>
            </div>

        </>
    )
}

export { Emailregister }