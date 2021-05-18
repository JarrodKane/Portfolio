import React from "react";

const Modal = ({ isOpen, children }) => {
  return (
    <div
      className={`modal bg-red-500  h-full opacity-95 fixed w-full left-0    overflow-hidden  origin-top top-14  duration-300 scale-y-0 ${
        isOpen ? "" : "transform"
      }`}
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
