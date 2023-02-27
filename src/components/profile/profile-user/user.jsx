import React from "react";
import styles from "./user.module.css"

const User = () => {
	return (
		<div className={styles.user}>
			<div className={styles.userInner}>
				<img src="https://pp.userapi.com/c10072/u43709447/-6/x_fb533f7e.jpg" alt="" className={styles.userInnerImg} />

				<div className="user__descr">
					<ul className="user__list">
					<p className={styles.userTitle}>VOR</p>
						<li className={styles.userItem}>
							<span>Date of Birth:</span>
							<span className={styles.userSubtitle}>2 junuary</span>
						</li>
						<li className={styles.userItem}>
							<span>City:</span>
							<span className={styles.userSubtitle}>Labinsk</span>
						</li>
						<li className={styles.userItem}>
							<span>Education:</span>
							<span className={styles.userSubtitle}>Fartu</span>
						</li>
						<li className={styles.userItem}>
							<span>VK:</span>
							<a href="https://vk.com/fordruid" className={styles.userSubtitle}>ya</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default User;