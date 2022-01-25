import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, register } from "../Redux/actions /actions";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Register() {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [ToggleAlert, setToggleAlert] = useState(false);
	const Errors = useSelector((state) => state.UserReducer.Errors);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<main id="RegisterPage">
				<div id="RegisterCard">
					<div className={ToggleAlert ? "Alerts AlertsOpen" : "Alerts"}>
						{Errors ? <p>{Errors[0].msg}</p> : null}
						<FontAwesomeIcon
							onClick={() => {
								setToggleAlert(!ToggleAlert);
								setTimeout(() => {
									dispatch(clearErrors());
								}, 500);
							}}
							icon={faTimes}
						/>
					</div>
					<h2>REGISTER</h2>
					<form>
						<label htmlFor="name">Name</label>
						<input
							onChange={(e) => setName(e.target.value)}
							value={Name}
							type="text"
							name="name"
							id="RegisterName"
							placeholder="Your Name..."
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={Email}
							type="email"
							name="email"
							id="RegisterEmail"
							placeholder="Your Email..."
							required
						/>
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={Password}
							type="password"
							name="password"
							id="RegisterPassword"
							placeholder="Your Password..."
							required
						/>
					</form>
					<button
						onClick={(e) => {
							e.preventDefault();
							dispatch(register({ Name, Email, Password }, navigate));
							setToggleAlert(true);
						}}
					>
						Register
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Register;
