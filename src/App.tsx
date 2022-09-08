import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import SingleWork from "./Work/SingleWork";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/blog" element={<Blog />} />
				<Route path="/work" element={<Work />} />
				<Route path="/work/:work" element={<SingleWork />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
