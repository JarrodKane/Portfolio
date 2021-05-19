import React, { useState, useEffect } from "react";
import LinkTo from "../atoms/linkTo";
import Modal from "../molecules/modal";

const { detect } = require("detect-browser");
const browser = detect();

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const curModal = isOpen;
    setIsOpen(!curModal);
  };

  // This is setting the overflow to being hidden when the modal is up.
  // It makes it look more clean and avoids you from scrolling by accident and losing your place on the page
  useEffect(() => {
    const curModal = isOpen;

    if (!curModal) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <nav
      className={` sticky top-0 z-10  flex w-screen  h-14 bg-gray-100  shadow-md justify-end  backdrop-filter backdrop-blur-lg  border-b border-gray-200 bg-opacity-30 firefox:bg-opacity-90 ${
        browser.name === "firefox" ? "bg-opacity-90 border-gray-300" : ""
      }`}
    >
      <Modal isOpen={isOpen}>
        <LinkTo label="Home" address="/" props={`text-5xl text-gray-200`} />
        <LinkTo
          label="Blog"
          address="/blog/"
          props={`text-5xl text-gray-200`}
        />
        <LinkTo
          label="Podcast"
          address="/Podcast/"
          props={`text-5xl text-gray-200`}
        />
        <LinkTo
          label="Youtube"
          address="/Youtube/"
          props={`text-5xl text-gray-200`}
        />
      </Modal>

      <div
        onClick={() => {
          handleOpen();
        }}
        className={`flex items-center cursor-pointer mr-5 md:mr-7 `}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="hamburger">
            <path
              className={`${isOpen ? "vHam" : ""}`}
              id="recT"
              d="M5 7.1H40C42.6728 7.1 44.8458 9.23997 44.899 11.9H0.101C0.15425 9.23997 2.32722 7.1 5 7.1Z"
              fill="#FCFCFC"
              stroke="black"
              stroke-width="0.2"
            />
            <path
              className={`${isOpen ? "vHam" : ""}`}
              id="recM"
              d="M5 20.1H44.899C44.8458 22.76 42.6728 24.9 40 24.9H0.101C0.15425 22.24 2.32722 20.1 5 20.1Z"
              fill="#FCFCFC"
              stroke="black"
              stroke-width="0.2"
            />
            <path
              className={`${isOpen ? "vHam" : ""}`}
              id="recB"
              d="M0.101 33.1H44.899C44.8458 35.76 42.6728 37.9 40 37.9H5C2.32722 37.9 0.15425 35.76 0.101 33.1Z"
              fill="#FCFCFC"
              stroke="black"
              stroke-width="0.2"
            />
          </g>
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
