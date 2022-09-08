import React from "react";
import featured from "../Data/featured-posts.json";
import { FC } from "react";
import "./News.scss";
import { Link } from "react-router-dom";

interface NewsProps {
	number: number;
}
{
	/* <NavLink to="/work/:work"></NavLink> */
}
const News: FC<NewsProps> = ({ number }) => {
	return (
		<div className="news">
			<Link to="/work/:work" state={{ work: featured[number] }}>
				<img className="image" src={featured[number].img}></img>
			</Link>
			<div className="txtbox">
				<Link to="/work/:work" state={{ work: featured[number] }}>
					<h1>{featured[number].title}</h1>
				</Link>
				<div className="year-tag">
					<div className="year">{featured[number].year}</div>
					<div className="tag">{featured[number].tag}</div>
				</div>
				<div className="description">{featured[number].description}</div>
			</div>
		</div>
	);
};

export default News;
