import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearErrors,
	clearSuccess,
	update,
	updatePassword,
	uploadUserImg,
} from "../Redux/actions /actions";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Edit() {
	const dispatch = useDispatch();
	const User = useSelector((state) => state.UserReducer.User);
	const Errors = useSelector((state) => state.UserReducer.Errors);
	const Success = useSelector((state) => state.UserReducer.Success);

	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Img, setImg] = useState(null);
	const [OldPassword, setOldPassword] = useState("");
	const [NewPassword, setNewPassword] = useState("");
	const [ToggleAlert, setToggleAlert] = useState(false);
	const [ToggleSuccess, setToggleSuccess] = useState(false);

	return (
		<>
			<Navbar />
			<main id="EditCard">
				<div id="Edit">
					<div
						className={
							ToggleSuccess && Success ? "Success SuccessOpen" : "Success"
						}
					>
						{Success ? <p>{Success[0].msg}</p> : null}
						<FontAwesomeIcon
							onClick={() => {
								setToggleSuccess(!ToggleSuccess);
								setTimeout(() => {
									dispatch(clearSuccess());
								}, 500);
							}}
							icon={faTimes}
						/>
					</div>
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
					<div id="Details">
						<div id="ImgCard">
							<div
								id="Img"
								style={{
									background: `url(${
										Img
											? URL.createObjectURL(Img)
											: User.Img
											? `Images/Users/${User.Img}`
											: "Images/user.png"
									})`,
								}}
							></div>
							<div id="AddImg">
								<p>Change Image :</p>
								<input
									type="file"
									alt="Img"
									onChange={(e) => setImg(e.target.files[0])}
								/>
								<button
									id="Uploadbtn"
									onClick={(e) => {
										e.preventDefault();
										let data = new FormData();
										data.append("id", User._id);
										data.append("Img", Img);
										dispatch(uploadUserImg(data));
										setToggleAlert(true);
										setToggleSuccess(true);
									}}
								>
									Upload
								</button>
							</div>
						</div>
						<form id="Form">
							<div>
								<label htmlFor="Name">Name : </label>
								<input
									type="text"
									name="Name"
									id="Name"
									onChange={(e) => setName(e.target.value)}
									defaultValue={User.Name}
									placeholder="Your Name..."
								/>
							</div>
							<div>
								<label htmlFor="Email">Email : </label>
								<input
									type="email"
									name="Email"
									id="Email"
									onChange={(e) => setEmail(e.target.value)}
									defaultValue={User.Email}
									placeholder="Your Email..."
								/>
							</div>
						</form>
						<button
							onClick={(e) => {
								e.preventDefault();
								dispatch(update({ id: User._id, Name, Email }));
								setToggleAlert(true);
								setToggleSuccess(true);
							}}
						>
							Save
						</button>
					</div>
					<div id="Separator"></div>
					<div id="Password">
						<p>Change Password :</p>
						<form id="Form">
							<div>
								<label htmlFor="OldPassword">Old Password :</label>
								<input
									type="password"
									name="OldPassword"
									id="OldPassword"
									onChange={(e) => setOldPassword(e.target.value)}
									value={OldPassword}
									placeholder="Your Old Password..."
								/>
							</div>
							<div>
								<label htmlFor="NewPassword">New Password :</label>
								<input
									type="password"
									name="NewPassword"
									id="NewPassword"
									onChange={(e) => setNewPassword(e.target.value)}
									value={NewPassword}
									placeholder="Your New Password..."
								/>
							</div>
						</form>
						<button
							onClick={(e) => {
								e.preventDefault();
								dispatch(
									updatePassword({ id: User._id, OldPassword, NewPassword })
								);
								setToggleAlert(true);
								setToggleSuccess(true);
							}}
						>
							Save
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Edit;
