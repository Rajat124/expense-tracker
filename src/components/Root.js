import React from "react";
import Header from "./pages/Header";

const Root = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Root;
