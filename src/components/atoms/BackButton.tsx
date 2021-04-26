import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  return (
    <>
      <Link to="/" className={styles.back}>
        ＜ Back
      </Link>
    </>
  );
};

export default BackButton;
