import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,

  ...props
}) => {
  const mode = primary ? "blue" : "red";
  const btnSize =
    size === "small"
      ? "text-xs py-1 px-2"
      : size === "medium"
      ? "text-base py-2 px-4"
      : "text-2xl py-4 px-8";

  return (
    <button
      type="button"
      className={`bg-${mode}-500 hover:bg-${mode}-700 text-white font-bold ${btnSize} rounded`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
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

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  sizes: "medium",
  onClick: undefined,
};
