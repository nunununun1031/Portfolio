import React from "react";
import styles from "./BottomBanner.module.scss";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CollectionsIcon from "@material-ui/icons/Collections";
import MoodIcon from "@material-ui/icons/Mood";
import MailIcon from "@material-ui/icons/Mail";

const BottomBanner: React.VFC = () => {
  return (
    <>
      <div className={styles.sp_bottom}>
        <Link to="/introduction" className={styles.sp_icons}>
          <IconButton className={styles.padding_none}>
            <AccountBoxIcon />
          </IconButton>
          <p>自己紹介</p>
        </Link>
        <Link to="/gallery" className={styles.sp_icons}>
          <IconButton className={styles.padding_none}>
            <CollectionsIcon />
          </IconButton>
          <p>作品集</p>
        </Link>
        <Link to="/recommendation" className={styles.sp_icons}>
          <IconButton className={styles.padding_none}>
            <MoodIcon />
          </IconButton>
          <p>推薦</p>
        </Link>
        <Link to="/contact" className={styles.sp_icons}>
          <IconButton className={styles.padding_none}>
            <MailIcon />
          </IconButton>
          <p>連絡先</p>
        </Link>
      </div>
    </>
  );
};

export default BottomBanner;
