import React from "react";

const Row = ({ props, children }) => {
  return (
    <div
      className={`max-w-xs mx-auto flex flex-row justify-around p-4 ${props}`}
    >
      {children}
    </div>
  );
};

export default Row;
