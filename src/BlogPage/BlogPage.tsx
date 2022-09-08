import React from "react";
import "./BlogPage.scss";
import BlogPost from "./BlogPost";
import blogposts from "../Data/blogposts.json";

const BlogPage = () => {
	return (
		<section className="blogpage">
			<div className="blogstitle">Blog</div>
			<div className="blogposts">
				<BlogPost item={blogposts[0]} />
				<div className="line"></div>
				<BlogPost item={blogposts[1]} />
				<div className="line"></div>
				<BlogPost item={blogposts[2]} />
				<div className="line"></div>
				<BlogPost item={blogposts[3]} />
				<div className="line"></div>
			</div>
		</section>
	);
};

export default BlogPage;
