import React from "react";
import BackButton from "../atoms/BackButton";

const Page404: React.VFC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#333", lineHeight: "100vh" }}>
        Page404
      </h1>
      <BackButton />
    </div>
  );
};

export default Page404;
