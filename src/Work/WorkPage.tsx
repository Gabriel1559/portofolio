import React from "react";
import News from "../FeaturedWorks/News";
import "./workpage.scss";

const WorkPage = () => {
	return (
		<section className="workpage">
			<div className="worktitle">Work</div>
			<div className="workflex">
				<News number={0}></News>
				<div className="line"></div>
				<News number={1}></News>
				<div className="line"></div>
				<News number={2}></News>
				<div className="line"></div>
				<News number={0}></News>
				<div className="line"></div>
			</div>
		</section>
	);
};

export default WorkPage;
