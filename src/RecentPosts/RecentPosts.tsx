import "./RecentPosts.scss";
import Card from "./Card";
import posts from "../Data/posts.json";
import { Link } from "react-router-dom";

const RecentPosts = () => {
	return (
		<section className="recentPosts">
			<div className="header">
				<div>Recent Posts</div>
				<div>
					<Link to="/blog">View all</Link>
				</div>
			</div>
			<div className="postflex">
				<Card item={posts[0]} />
				<Card item={posts[1]} />
			</div>
		</section>
	);
};

export default RecentPosts;
