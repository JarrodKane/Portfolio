import React, { useState } from "react";
import LinkTo from "../atoms/linkTo";
import Modal from "../molecules/modal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const curModal = isOpen;
    setIsOpen(!curModal);
    if (curModal) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div
      className={`fixed top-0 flex w-screen  h-14 bg-gray-500  shadow-md justify-end cursor-pointer`}
    >
      {isOpen ? (
        <Modal>
          <LinkTo label="Home" address="/" props={`text-5xl`} />
          <LinkTo label="Blog" address="/Blog/" props={`text-5xl`} />
          <LinkTo label="Podcast" address="/Podcast/" props={`text-5xl`} />
          <LinkTo label="Youtube" address="/Youtube/" props={`text-5xl`} />
        </Modal>
      ) : null}
      <div
        onClick={() => {
          handleOpen();
        }}
        className={`bg-red-500`}
      >
        Shevron
      </div>
    </div>
  );
};

export default Navigation;
