import React from "react";
import PropTypes from "prop-types";

export const Text = ({ primary, text, weight, size, props, children }) => {
  const mode = primary ? "blue" : "red";

  let styling = "";

  switch (size) {
    case "small":
      styling = "text-sm";
      break;
    case "medium":
      styling = "text-base ";
      break;
    case "large":
      styling = "text-lg ";
      break;
    default:
      break;
  }

  return (
    <p
      type="text"
      className={`${styling}  font-${weight} ${props} whitespace-pre-line`}
    >
      {text}
    </p>
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

  weight: PropTypes.oneOf(["thin", "light", "normal", "medium", "bold"]),

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  type: PropTypes.string,

  text: PropTypes.string,
};

Text.defaultProps = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem nibh, semper a mi congue, tristique",
};
