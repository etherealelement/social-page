import React from "react";
import styles from "./dilogs-nav.module.css";
import { NavLink } from "react-router-dom";

const DialogsNav = () => {
  return (
    <div className="dialogsNav">
      <ul className={styles.dialogsList}>
        <li className={styles.dialogsListItem}>
          <NavLink to=" " className={styles.active}>Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
        <li className={styles.dialogsListItem}>
          <NavLink href="">Andrew</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DialogsNav;
