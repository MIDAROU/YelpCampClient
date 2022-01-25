import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Profile() {
	return (
		<>
			<Navbar />
			<main id="ProfileCard">
				<div id="Profile">
					<p id="Title">My Campgrounds :</p>
					<div id="Separator"></div>
					<div id="Campgrounds"></div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Profile;
