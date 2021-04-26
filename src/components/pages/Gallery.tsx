import React from "react";
import styles from "./Gallery.module.scss";
import { Typography } from "@material-ui/core";
import BackButton from "../atoms/BackButton";
import BottomBanner from "../organisms/BottomBanner";

const Gallery: React.VFC = () => {
  const works = ["title1", "title2", "title3"];
  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <Typography variant="h2" className={styles.margin_bottom}>
            作品集
          </Typography>
          <Typography variant="h4">Collection of Works</Typography>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <div className={styles.right_container}>
            {works.map((work, index) => {
              return (
                <div key={index} className={styles.work}>
                  <div className={styles.work_img}></div>
                  <br />
                  <Typography variant="h6">{work}</Typography>
                  <Typography variant="subtitle1">
                    text text text text text text text text text text text text
                    text text text text text text text text text text text text
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BackButton />
      <BottomBanner />
    </>
  );
};

export default Gallery;
