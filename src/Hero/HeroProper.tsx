import React from "react";
import "./HeroProper.scss";
import "../components/button.scss";

const HeroProper = () => {
	let photo = "photoes/myface.jpg";
	return (
		<section className="hero">
			<div className="title">
				<h1>
					Hi.I am Gabi,
					<br /> Frontend Developer
				</h1>
				<div className="paragraphHero">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</div>
				<button className="downloadButoon">Download Resume</button>
			</div>
			<img className="photo" src={photo} alt="myface" />
		</section>
	);
};

export default HeroProper;
