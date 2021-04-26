import React from "react";
import styles from "./Home.module.scss";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import BottomBanner from "../organisms/BottomBanner";

const Home: React.VFC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Link className={styles.item1} to="/introduction">
            自己紹介
          </Link>
          <Link to="/gallery" className={styles.item2}>
            作品集
          </Link>
          <Typography className={styles.item3}>
            Welcome
            <br />
            to
            <br />
            my Portfolio!!!
          </Typography>
          <Link to="/recommendation" className={styles.item4}>
            推薦の声
          </Link>
          <Link to="/contact" className={styles.item5}>
            お問い合わせ
          </Link>
        </div>
      </div>
      <div className={styles.sp_root}>
        <div className={styles.sp_wrapper}>
          <Typography variant="h3">
            Welcome
            <br />
            to
            <br />
            my Portfolio!!
          </Typography>
        </div>
        <BottomBanner />
      </div>
    </>
  );
};

export default Home;
