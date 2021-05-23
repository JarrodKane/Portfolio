import React, { useState, useEffect } from "react";
import LinkTo from "../atoms/linkTo";
import Modal from "../molecules/modal";

const BackToTop = () => {
  const [isVisible, setIsVisibal] = useState(false);

  const handleTop = () => {
    // This will scroll the screen to the top
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollDisplay = () => {
    if (window.pageYOffset > 300) {
      setIsVisibal(true);
    } else {
      setIsVisibal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDisplay);
  }, []);

  // TODO: Display back to top only after scrolling has begun

  // This is setting the overflow to being hidden when the modal is up.
  // It makes it look more clean and avoids you from scrolling by accident and losing your place on the page

  // className={` sticky top-0 z-10  flex w-screen  h-14 bg-gray-100  shadow-md justify-end  backdrop-filter backdrop-blur-lg  border-b border-gray-200 bg-opacity-30 firefox:bg-opacity-90 ${
  //   browser.name === "firefox"
  //     ? "bg-opacity-90 border-gray-300 bg-gray-100 "
  //     : ""
  // }`}

  return (
    <div className={` sticky bottom-5   flex w-screen md:pr-3  justify-end  `}>
      <svg
        onClick={handleTop}
        className={`cursor-pointer h-14  transition-all duration-300 ease-in-out  opacity-0   ${
          isVisible ? "opacity-100 transform visible" : "invisible"
        }  `}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Up" clip-path="url(#clip0)">
          <g id="light">
            <path
              id="tLight"
              d="M48.0428 52.39C48.2383 52.0513 48.3361 51.8819 48.4197 51.7742C49.2204 50.7419 50.7796 50.7419 51.5803 51.7742C51.6639 51.8819 51.7617 52.0513 51.9572 52.39L71.4255 86.11C71.621 86.4487 71.7188 86.6181 71.7703 86.7443C72.2639 87.9539 71.4843 89.3042 70.19 89.4815C70.0549 89.5 69.8594 89.5 69.4683 89.5H30.5317C30.1406 89.5 29.9451 89.5 29.81 89.4815C28.5157 89.3042 27.7361 87.9539 28.2297 86.7443C28.2812 86.6181 28.379 86.4487 28.5745 86.11L48.0428 52.39Z"
              fill="#A8B1FE"
              fill-opacity="0.85"
            />
          </g>
          <g id="dark">
            <path
              id="tDark1"
              d="M48.0428 32.39C48.2383 32.0513 48.3361 31.8819 48.4197 31.7742C49.2204 30.7419 50.7796 30.7419 51.5803 31.7742C51.6639 31.8819 51.7617 32.0513 51.9572 32.39L71.4255 66.11C71.621 66.4487 71.7188 66.6181 71.7703 66.7443C72.2639 67.9539 71.4843 69.3042 70.19 69.4815C70.0549 69.5 69.8594 69.5 69.4683 69.5H30.5317C30.1406 69.5 29.9451 69.5 29.81 69.4815C28.5157 69.3042 27.7361 67.9539 28.2297 66.7443C28.2812 66.6181 28.379 66.4487 28.5745 66.11L48.0428 32.39Z"
              fill="#4DA6F8"
              fill-opacity="0.85"
            />
            <path
              id="tDark2"
              d="M48.0428 52.39C48.2383 52.0513 48.3361 51.8819 48.4197 51.7742C49.2204 50.7419 50.7796 50.7419 51.5803 51.7742C51.6639 51.8819 51.7617 52.0513 51.9572 52.39L71.4255 86.11C71.621 86.4487 71.7188 86.6181 71.7703 86.7443C72.2639 87.9539 71.4843 89.3042 70.19 89.4815C70.0549 89.5 69.8594 89.5 69.4683 89.5H30.5317C30.1406 89.5 29.9451 89.5 29.81 89.4815C28.5157 89.3042 27.7361 87.9539 28.2297 86.7443C28.2812 86.6181 28.379 86.4487 28.5745 86.11L48.0428 52.39Z"
              fill="#4DA6F8"
              fill-opacity="0.85"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackToTop;
