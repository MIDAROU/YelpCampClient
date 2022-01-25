import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<Navbar />
			<main id="HomeCard">
				<h1>YelpCamp</h1>
				<p>Welcome To YelpCamp</p>
				<p>Jump In And Explore Our Campgrounds</p>
				<Link to="/Campgrounds">
					<button className="button">View Our Campgrounds</button>
				</Link>
			</main>
			<Footer />
		</>
	);
}

export default Home;
