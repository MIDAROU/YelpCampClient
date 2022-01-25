import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, login } from "../Redux/actions /actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [ToggleAlert, setToggleAlert] = useState(false);
	const Errors = useSelector((state) => state.UserReducer.Errors);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<main id="LoginPage">
				<div id="LoginCard">
					<div
						className={ToggleAlert && Errors ? "Alerts AlertsOpen" : "Alerts"}
					>
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
					<h2>LOGIN</h2>
					<form>
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={Email}
							type="email"
							name="email"
							id="LoginEmail"
							placeholder="Your Email..."
							required
						/>
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={Password}
							type="password"
							name="password"
							id="LoginPassword"
							placeholder="Your Password..."
							required
						/>
					</form>
					<button
						onClick={(e) => {
							e.preventDefault();
							dispatch(login({ Email, Password }, navigate));
							setToggleAlert(true);
						}}
					>
						Login
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Login;
