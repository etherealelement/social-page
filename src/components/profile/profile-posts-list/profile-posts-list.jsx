import React from "react";
import styles from "./profile-posts-list.module.css";

const PostsList = (props) => {
  return (
    <div className={styles.posts}>
      <ul className={styles.postsList}>
        <li className={styles.postsListItem}>
          <a href="">
            <img src="https://pp.userapi.com/c10072/u43709447/-6/x_fb533f7e.jpg" alt="" className={styles.userImg} />
          </a>
          <span className={styles.userName}>{props.name}</span>
        </li>
				<p>{props.message}</p>
        <div className="buttons">
          <button>Like: {props.likeCounter}</button>
        </div>
      </ul>
    </div>
  );
};

export default PostsList;
