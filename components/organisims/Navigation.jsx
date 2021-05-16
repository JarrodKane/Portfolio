import React from "react";
import LinkTo from "../atoms/linkTo";

const Navigation = () => {
  return (
    <div className={`flex w-screen  h-14 bg-gray-500  shadow-md`}>
      <LinkTo label="Home" address="/" />
      <LinkTo label="Blog" address="/Blog/" />
    </div>
  );
};

export default Navigation;
