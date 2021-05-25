import React from "react";

const Modal = ({ isOpen = false, children }) => {
  return (
    <div
      className={`modal bg-red-500 h-screen opacity-95 fixed w-full left-0 overflow-hidden origin-top top-14  duration-300  z-30  scale-y-0 transform ${
        isOpen ? "scale-y-100 " : ""
      }`}
    >
      {/* Needed a negative margin to account for the navigation bar at the top */}
      <div className={` flex flex-col  w-full h-full  justify-center -mt-14`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
