import React from "react";
import styles from "./Introduction.module.scss";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import cocoa from "../../assets/img/kokoa.jpg";
import BackButton from "../atoms/BackButton";
import BottomBanner from "../organisms/BottomBanner";

const useStyles = makeStyles({
  table: {
    marginTop: "40px",
    maxWidth: 250,
  },
});

const Introduction: React.VFC = () => {
  const classes = useStyles();

  const hobbys = ["散歩", "読書", "アニメ鑑賞"];
  const languages = ["HTML", "CSS", "JavaScript", "Typescript", "React"];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <Typography variant="h2" className={styles.margin_bottom}>
            自己紹介
          </Typography>
          <Typography variant="h4">Introduction</Typography>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <div className={styles.right_container}>
            <div className={styles.my_photo}>
              <img src={cocoa} alt="" />
            </div>
            <TableContainer className={classes.table}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>名前:</TableCell>
                    <TableCell>
                      <Typography variant="h6">ぬぬぬぬん</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>年齢:</TableCell>
                    <TableCell>
                      <Typography variant="h6">27歳</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>趣味:</TableCell>
                    <TableCell>
                      {hobbys.map((hobby, index) => (
                        <Typography key={index} variant="h6">
                          {hobby}
                        </Typography>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>言語:</TableCell>
                    <TableCell>
                      {languages.map((language, index) => (
                        <Typography key={index} variant="h6">
                          {language}
                        </Typography>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>これから:</TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">
                        これからは、今まで学んできた知識を活かして
                        社会をよりよくするために尽力します！
                        具体的に言うと、将来の目標は日本製の次世代型LINEを
                        作ることです。そのために日々スキルアップ
                        を楽しく継続し、成長していきます。
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <BackButton />
      <BottomBanner />
    </>
  );
};

export default Introduction;
