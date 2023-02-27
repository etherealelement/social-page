import React from "react";
import PostsList from "../profile-posts-list/profile-posts-list";
import styles from "./posts.module.css";

const Posts = () => {
	return(
		<section className="posts">
			<div className="post__inner">
				<p className={styles.postsTittle}>My Posts</p>
				<form>
					<textarea type="text" className={styles.postsArea}/>
					<button className={styles.postsBtn}>
						Send
					</button>
				</form>
			</div>
			<PostsList name="VOR" message="По жизни воровской" likeCounter="3"></PostsList>
			<PostsList name="VOR" message="Фраер" likeCounter="5"></PostsList>
			<PostsList name="VOR" message="Убейте меня" likeCounter="23"></PostsList>
		</section>
	)
}

export default Posts;