import React from "react";
import PropTypes from "prop-types";
import Github from "../../public/images/github.svg";

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ imageFile }) => {
  return (
    <div
      type="icon"
      className={`h-24 w-24 flex p-5 bg-gray-300 rounded-lg shadow-xl hover:bg-indigo-300 cursor-pointer  transition duration-300 ease-in-out `}
    >
      <img src={imageFile}></img>
    </div>
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
