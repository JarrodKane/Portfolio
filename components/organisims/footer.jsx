import React, { useState } from "react";
import LinkTo from "../atoms/linkTo";
import Modal from "../molecules/modal";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // TODO: Display back to top only after scrolling has begun

  // This is setting the overflow to being hidden when the modal is up.
  // It makes it look more clean and avoids you from scrolling by accident and losing your place on the page

  return (
    <div
      className={` sticky bottom-0 z-10  flex w-screen  h-14   shadow-md justify-end  backdrop-filter backdrop-blur-lg  border-b border-gray-200 bg-opacity-30 firefox:bg-opacity-90`}
    >
      <div onClick={handleTop} className={`cursor-pointer bg-gray-200`}>
        TOP
      </div>
    </div>
  );
};

export default Footer;
