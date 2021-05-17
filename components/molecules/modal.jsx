import React from "react";

const Modal = ({ children }) => {
  return (
    <div
      className={`modal opacity-95 bg-red-500  fixed w-full h-full top-14 left-0 flex items-center justify-center  cursor-default`}
    >
      <div
        className={` flex flex-col  w-full h-full   items-baseline justify-center`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
