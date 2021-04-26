import React, { useCallback, useState } from "react";
import styles from "./Contact.module.scss";
import { Button, TextField, Typography } from "@material-ui/core";
import BackButton from "../atoms/BackButton";
import InputText from "../atoms/InputText";
import BottomBanner from "../organisms/BottomBanner";

const Contact: React.VFC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <Typography variant="h2" className={styles.margin_bottom}>
            連絡
          </Typography>
          <Typography variant="h4">Contact Information</Typography>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <div className={styles.right_container}>
            <TextField
              className={styles.text_field}
              type="text"
              value={name}
              label="名前"
              variant="filled"
              onChange={onChangeName}
            />
            <TextField
              className={styles.text_field}
              type="email"
              value={email}
              label="email"
              variant="filled"
              onChange={onChangeEmail}
            />
            <TextField
              className={styles.text_field}
              type="text"
              value={text}
              label="詳細"
              variant="filled"
              multiline
              rows={5}
              onChange={onChangeText}
            />
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
            >
              送信
            </Button>
            {/* <InputText
              type="text"
              value={name}
              label="名前"
              onChange={onChangeName}
            /> */}
          </div>
        </div>
      </div>
      <BackButton />
      <BottomBanner />
    </>
  );
};

export default Contact;
