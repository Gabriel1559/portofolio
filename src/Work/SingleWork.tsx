import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EndPage from "../Endpage/EndPage";
import TopMenu from "../Hero/TopMenu";
import "./singleWork.scss";

const SingleWork = () => {
	const location = useLocation();
	const { work } = location.state as any;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<TopMenu />
			<div className="singlework">
				<h1 className="h11">{work.title}</h1>
				<div className="worktags-year">
					<div className="workyear">{work.year}</div>
					<div className="worktags">{work.tag}</div>
				</div>
				<div className="workdescription">{work.description}</div>
				<img className="workimage" src={work.img1}></img>
				<div className="workheader">
					<h1>{work.head1}</h1>
					<h2>{work.head2}</h2>
					<div className="workdescription">{work.description}</div>
				</div>
				<img className="workimage" src={work.img2}></img>
				<img className="workimage" src={work.img3}></img>
			</div>
			<EndPage />
		</>
	);
};

export default SingleWork;
