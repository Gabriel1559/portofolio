import React from "react";
import EndPage from "../Endpage/EndPage";
import FeaturedWorks from "../FeaturedWorks/FeaturedWorks";
import HeroProper from "../Hero/HeroProper";
import TopMenu from "../Hero/TopMenu";
import RecentPosts from "../RecentPosts/RecentPosts";

const Home = () => {
	return (
		<>
			<TopMenu />
			<HeroProper />
			<RecentPosts />
			<FeaturedWorks />
			<EndPage />
		</>
	);
};

export default Home;
