import React from "react";
import { FaMailBulk, FaPhoneAlt, FaRoad } from "react-icons/fa";
import "./contactpage.scss";
const ContactPage = () => {
	return (
		<div className="contactpage">
			<div className="contacttext">
				<div className="findme">You can find me here:</div>
				<div className="contactinfo">
					<div className="singleinfo">
						<FaPhoneAlt />
						<div>07412312313</div>
					</div>
					<div className="singleinfo">
						<FaMailBulk />
						<div>sandor_gabi2001@yahoo.com</div>
					</div>
					<div className="singleinfo">
						<FaRoad />
						<div>str. Armatei nr19, Zalau</div>
					</div>
				</div>
			</div>
			<img
				className="imaje"
				src="https://cdn.serif.com/affinity/img/home/0522/photo-card-090520221343--lg@2x.jpg"
			></img>
		</div>
	);
};

export default ContactPage;
