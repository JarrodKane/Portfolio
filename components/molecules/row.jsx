import React from "react";

const Row = ({ children }) => {
  return (
    <div className={`w-full flex flex-row justify-around p-4`}>{children}</div>
  );
};

export default Row;
