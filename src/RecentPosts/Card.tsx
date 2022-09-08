import React from "react";
import { FC } from "react";
import "./Card.scss";

interface CardProps {
	item: any;
}
const Card: FC<CardProps> = ({ item }) => {
	return (
		<div className="card">
			<div className="thetitle">{item?.title}</div>
			<div className="tags">
				<div className="description">{item?.date}</div>
				<div className="bar"></div>
				<div className="description">
					{item?.tags[0]}, {item?.tags[1]}
				</div>
			</div>
			<div className="description"> {item?.description}</div>
		</div>
	);
};

export default Card;
