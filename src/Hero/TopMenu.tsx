import React, { useState, useEffect } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import "./TopMenu.scss";
import "../components/button.scss";
import { NavLink, useParams } from "react-router-dom";

const TopMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (showMenu === true) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "scroll";
	}, [showMenu]);

	return (
		<div className="navbar">
			<div
				className="burger-menu"
				onClick={() => {
					setShowMenu(!showMenu);
				}}
			>
				{showMenu ? <VscClose /> : <VscMenu />}
			</div>
			<nav className={` ${showMenu ? "open" : "close"}`}>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to="/blog"
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to="/work"
						>
							Work
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TopMenu;
