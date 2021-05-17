import React from "react";

const Row = ({ children }) => {
  return (
    <div
      className={`max-w-xs mx-auto flex flex-row justify-around p-4 md:justify-start md:max-w-full`}
    >
      {children}
    </div>
  );
};

export default Row;
