import React from "react";
import PropTypes from "prop-types";
import Github from "../../public/images/github.svg";

/**
 * Primary UI component for user interaction
 */
export const Icon = ({
  primary,
  backgroundColor,
  size,

  ...props
}) => {
  const mode = primary ? "blue" : "red";
  const padding =
    size === "small"
      ? "text-xs py-1 px-2"
      : size === "medium"
      ? "text-base py-2 px-4"
      : "text-2xl py-4 px-8";

  return (
    // <div
    //   type="icon"
    //   className={`h-40 w-40 flex p-6 bg-gray-300 rounded-lg shadow-xl `}
    //   style={backgroundColor && { backgroundColor }}
    //   {...props}
    // >
    <Github height={100} />
    // </div>
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
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  backgroundColor: null,
  primary: false,
  sizes: "medium",
  onClick: undefined,
};
