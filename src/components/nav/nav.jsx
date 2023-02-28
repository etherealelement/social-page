import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";


const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li  className={styles.navLink}>
					<NavLink to="/profile"  activeclassname={styles.active}>
						Profile
					</NavLink>
				</li>
				<li className={styles.navLink}>
					<NavLink to="/dialogs" activeclassname={styles.active}>
					Messager
					</NavLink>
				</li>
				<li className={styles.navLink}>
					<NavLink to="/news">
					News
					</NavLink>
				</li>
				<li className={styles.navLink}>
					<NavLink to="/music">
					Music
					</NavLink>
				</li>
				<li className={styles.navLink}>
					<NavLink to="/settings">
					Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;