import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ imageFile, linkRef, props }) => {
  return (
    <a
      href={`${linkRef}`}
      rel="noopener"
      target="_blank"
      className={` bg-blue-900`}
      type="icon"
      className={`flex rounded-lg shadow-xl hover:bg-indigo-400 cursor-pointer  transition duration-300 ease-in-out ${props}`}
    >
      <img src={imageFile}></img>
    </a>
  );
};

Icon.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

// Icon.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   sizes: "medium",
//   onClick: undefined,
// };
