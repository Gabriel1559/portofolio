import React from "react";
import "./Endpage.scss";
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

const EndPage = () => {
	return (
		<section>
			<div className="icons">
				<FaFacebookSquare />
				<FaInstagram />
				<FaTwitter />
				<FaLinkedin />
			</div>
			<div className="copyright">Copyright ©2020 All rights reserved </div>
		</section>
	);
};

export default EndPage;
