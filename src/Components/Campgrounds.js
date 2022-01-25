import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Campgrounds() {
	return (
		<>
			<Navbar />
			<main id="CampgroundsPage">
				<div id="CampgroundsCard">
					<div id="Map"></div>
					<div id="CampgroundsSearch">
						<h2>Search</h2>
						<input
							type="text"
							name="text"
							id="SearchCampgrounds"
							placeholder="Campground..."
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Campgrounds;
