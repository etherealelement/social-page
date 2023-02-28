import React from "react";
import styles from "./nav.module.css";


const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li>
					<a href="/profile" className={styles.navLink}>
						Profile
					</a>
				</li>
				<li>
					<a href="/dialogs" className={`${styles.navLink} ${styles.active}`}>
					Messager
					</a>
				</li>
				<li>
					<a href="/news" className={styles.navLink}>
					News
					</a>
				</li>
				<li>
					<a href="/music" className={styles.navLink}>
					Music
					</a>
				</li>
				<li>
					<a href="/settings" className={styles.navLink}>
					Settings
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;