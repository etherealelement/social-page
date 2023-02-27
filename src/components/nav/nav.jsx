import React from "react";
import styles from "./nav.module.css";


const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li>
					<a href="" className={styles.navLink}>
						Profile
					</a>
				</li>
				<li>
					<a href="" className={styles.navLink}>
					Messages
					</a>
				</li>
				<li>
					<a href="" className={styles.navLink}>
					News
					</a>
				</li>
				<li>
					<a href="" className={styles.navLink}>
					Music
					</a>
				</li>
				<li>
					<a href="" className={styles.navLink}>
					Settings
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;