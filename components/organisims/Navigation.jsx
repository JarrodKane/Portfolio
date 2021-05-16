import React from "react";
import LinkTo from "../atoms/linkTo";

const Navigation = () => {
  return (
    <div>
      <LinkTo label="Home" address="/" />
      <LinkTo label="Blog" address="/Blog/" />
    </div>
  );
};

export default Navigation;
