import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCurrent, logout } from "../Redux/actions /actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	const dispatch = useDispatch();
	const location = useLocation();
	const User = useSelector((state) => state.UserReducer.User);
	const Token = localStorage.getItem("Token");

	useEffect(() => {
		if (Token) {
			dispatch(getCurrent());
		}
	}, [Token, dispatch]);

	const [MenuToggle, setMenuToggle] = useState(false);
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 5) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};

	window.addEventListener("scroll", changeNavbarColor);

	return (
		<header>
			<nav className={colorChange ? "Navbar ColorChange" : "Navbar"}>
				<h1 id="Logo">
					<Link to="/">YelpCamp</Link>
				</h1>
				<ul id="NavMenu">
					<li>
						<Link
							to="/"
							className={location.pathname === "/" ? "Underline" : null}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/Campgrounds"
							className={
								location.pathname === "/Campgrounds" ? "Underline" : null
							}
						>
							Campgrounds
						</Link>
					</li>
					{!Token ? (
						<li>
							<Link to="/Register">
								<button id="Register">Register</button>
							</Link>
						</li>
					) : (
						<li className="MenuContainer">
							<div className={MenuToggle ? "Menu MenuOpen" : "Menu"}>
								<div className="TopMenu">
									<p>{User.Name || "------"}</p>
									<button onClick={() => setMenuToggle(!MenuToggle)}>
										{!MenuToggle ? (
											<FontAwesomeIcon icon={faCaretDown} />
										) : (
											<FontAwesomeIcon icon={faCaretUp} />
										)}
									</button>
								</div>
								<div className="BottomMenu">
									<Link
										to="/Profile"
										className={
											location.pathname === "/Profile"
												? "UnderlineMenu HoverUnderline"
												: null
										}
									>
										Profile
									</Link>
									<Link
										to="/Edit"
										className={
											location.pathname === "/Edit"
												? "UnderlineMenu HoverUnderline"
												: null
										}
									>
										Edit
									</Link>
									<Link to="/" onClick={() => dispatch(logout())}>
										Logout
									</Link>
								</div>
							</div>
						</li>
					)}
					{!Token ? (
						<li>
							<Link to="/Login">
								<button id="Login">Login</button>
							</Link>
						</li>
					) : (
						<div
							id="UserImg"
							style={{
								background: `url(${
									!User.Img ? "Images/user.png" : `Images/Users/${User.Img}`
								})`,
							}}
						></div>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
