import React from "react";
import PropTypes from "prop-types";

export const Text = ({
  imageFile,
  primary,
  backgroundColor,
  type,
  children,

  ...props
}) => {
  const mode = primary ? "blue" : "red";

  switch (type) {
    case "p":
      family = "text-xs py-1 px-2";
      break;
    case "h1":
      family = "text-base py-2 px-4";
      break;

    default:
      break;
  }

  return (
    <div
      type="text"
      className={`h-32 w-32 flex p-5 bg-gray-300 rounded-lg shadow-xl hover:bg-indigo-300 cursor-pointer`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {...children}
    </div>
  );
};

Text.propTypes = {
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
