import React, { useState } from "react";
import { auth, provider } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import toast, { Toaster } from 'react-hot-toast';
import logo2 from '../codeswearcircle.png'
import { Link } from "react-router-dom";

const Login = () => {
	const [mynumber, setnumber] = useState("+91");
	const [otp, setotp] = useState("");
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState("");
	const sumbit = () => {
		auth.signInWithPopup(provider).catch(alert)
	}

	const signin = () => {
		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier(
			"recaptcha-container"
		);
		auth.signInWithPhoneNumber(mynumber, verify)
			.then((result) => {
				setfinal(result);
				toast.success("Code Successfully sent to your number")
				setshow(true);

			})
			.catch((err) => {
				toast.error(err)
				window.location.reload();
			});
	};


	const ValidateOtp = () => {
		if (otp === null || final === null) return;
		final
			.confirm(otp)
			.then((result) => {
				toast.success("Login sucessfully....")
			})
			.catch((err) => {
				toast.error("Enter valid OTP....")
			});
	};

	return (
		<>
			<Toaster />
			<div style={{ marginTop: "200px" }}>
				<center>
					<div className="login-box"
						style={{
							display: !show ? "block" : "none",
						}}
					>
						<img src={`${logo2}`} alt="logo" />
						<h1>Enter your phone number to continue</h1>
						<input
							value={mynumber}
							onChange={(e) => {
								setnumber(e.target.value);
							}}
							placeholder="phone number"
						/>
						<br />
						<br />
						<div id="recaptcha-container"></div>
						<button onClick={signin}>
							Send OTP
						</button>
					</div>
					<div className="login-box"
						style={{
							display: show ? "block" : "none",
						}}
					>
						<input
							type="text"
							placeholder={"Enter your OTP"}
							onChange={(e) => {
								setotp(e.target.value);
							}}
						></input>
						<br />
						<br />
						<button onClick={ValidateOtp}>
							Verify
						</button>
					</div>
					<div className="login-email">
						<Link to='/emaillogin'><h3>login with email</h3></Link>
						<h3 onClick={sumbit}>signin with google</h3>
					</div>
				</center>
			</div>

		</>

	);
};

export { Login };