import React from "react";
import styles from "./Recommendation.module.scss";
import { Typography } from "@material-ui/core";
import reactImage from "../../assets/img/react-icon.png";
import awsImage from "../../assets/img/aws-icon.png";
import ikemenImage from "../../assets/img/ikemen.jpg";
import BackButton from "../atoms/BackButton";
import BottomBanner from "../organisms/BottomBanner";

const Recommendation: React.VFC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <Typography variant="h2" className={styles.margin_bottom}>
            推薦の声
          </Typography>
          <Typography variant="h4">Recommendation</Typography>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <div className={styles.right_container}>
            <div className={styles.rec_item}>
              <div className={styles.rec_img}>
                <img src={reactImage} alt="" />
              </div>
              <div className={styles.rec_text}>
                <Typography variant="subtitle1">
                  氏名: Rさん (25歳男性)
                </Typography>
                <Typography variant="subtitle1">
                  とても落ち着きがあり、素敵な方だと思いました！
                  <br />
                  またよろしくお願いします！
                </Typography>
              </div>
            </div>
            <div className={styles.rec_item}>
              <div className={styles.rec_img}>
                <img src={ikemenImage} alt="" />
              </div>
              <div className={styles.rec_text}>
                <Typography variant="subtitle1">
                  氏名: Sさん (27歳男性)
                </Typography>
                <Typography variant="subtitle1">
                  Cool job!
                  <br />
                  You are so fantastic!
                </Typography>
              </div>
            </div>
            <div className={styles.rec_item}>
              <div className={styles.rec_img}>
                <img src={awsImage} alt="" />
              </div>
              <div className={styles.rec_text}>
                <Typography variant="subtitle1">
                  氏名: Aさん (42歳男性)
                </Typography>
                <Typography variant="subtitle1">
                  幅広い提案をしてくださり、想定より良い完成品が届きました。
                  <br />
                  嬉しかったです。
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
      <BottomBanner />
    </>
  );
};

export default Recommendation;
