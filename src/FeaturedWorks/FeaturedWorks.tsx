import React from "react";
import "./FeaturedWorks.scss";
import News from "./News";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FeaturedWorks = () => {
	return (
		<section className="featuredworks">
			<div className="collum">
				<div className="titleFeatured">Featured works</div>
				<News number={0}></News>
				<div className="longline" />
				<News number={1}></News>
				<div className="longline" />
				<News number={2}></News>
				<div className="longline" />
			</div>
			<div className="titleFeatured2">Featured works</div>
			<Carousel
				className="carusel"
				showThumbs={false}
				infiniteLoop={true}
				autoPlay={false}
			>
				<div>
					<News number={0}></News>
				</div>
				<div>
					<News number={1}></News>
				</div>
				<div>
					<News number={2}></News>
				</div>
			</Carousel>
		</section>
	);
};

export default FeaturedWorks;
