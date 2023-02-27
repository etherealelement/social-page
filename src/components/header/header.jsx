import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
      <header>
        <a href="#" className="header__link">
          <img
            src="https://e7.pngegg.com/pngimages/221/805/png-clipart-logo-design-angle-leaf.png"
            alt=""
            className={styles.logo}
          />
        </a>
      </header>
  );
};

export default Header;
