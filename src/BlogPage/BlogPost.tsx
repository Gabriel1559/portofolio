import React from "react";
import { FC } from "react";
import "./blogPost.scss";

interface BlogPostProps {
	item: any;
}
const BlogPost: FC<BlogPostProps> = ({ item }) => {
	return (
		<div className="blog-posts">
			<div className="blogtitle">{item.title}</div>
			<div className="year-tags">
				<div>{item.year}</div>
				<div className="line"></div>
				<div className="tags">
					{item.tag[0]} , {item.tag[1]}
				</div>
			</div>
			<div className="description">{item.description}</div>
		</div>
	);
};

export default BlogPost;
