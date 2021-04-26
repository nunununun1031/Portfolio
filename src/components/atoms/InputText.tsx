import { TextField } from "@material-ui/core";
import React, { memo } from "react";

type Props = {
  type: String;
  value: String;
  label: String;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputText: React.VFC<Props> = memo((props) => {
  const { value, label, onChange } = props;
  return (
    <>
      <TextField
        value={value}
        label={label}
        onChange={onChange}
        variant="filled"
      />
    </>
  );
});

export default InputText;
