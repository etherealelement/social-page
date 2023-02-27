import React from "react";
import "./posts.css";

const Posts = () => {
	return(
		<section className="posts">
			<div className="post__inner">
				<p className="posts__tittle">My Posts</p>
				<form  className="posts-form">
					<input type="text" />
					<button className="posts-btn">
						Send
					</button>
				</form>
				
			</div>
		</section>
	)
}

export default Posts;