import React from "react";
import styles from "./posts.module.css";

const Posts = () => {
	return(
		<section className="posts">
			<div className="post__inner">
				<p className={styles.postsTittle}>My Posts</p>
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