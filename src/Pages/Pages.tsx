import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Blog from "./Blog";
import Work from "./Work";

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/blog" element={<Blog />} />
			<Route path="/work" element={<Work />} />
		</Routes>
	);
};

export default Pages;
