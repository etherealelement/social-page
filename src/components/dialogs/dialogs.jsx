import React from "react";
import DialogsContent from "./dialogs-content/dialogs-content";
import DialogsNav from "./dialogs-nav/dialogs-nav";
import styles from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <section className="messanger">
      <div className={styles.messangerInner}>
        <DialogsNav></DialogsNav>
        <DialogsContent></DialogsContent>
      </div>
    </section>
  );
};

export default Dialogs;
