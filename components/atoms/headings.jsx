import React from "react";
import PropTypes from "prop-types";

export const Headings = ({ type, primary, text, weight }) => {
  const mode = primary ? "blue" : "red";

  let styling = "";

  switch (type) {
    case "h3":
      styling = "text-3xl font-MyFont ";
      break;
    case "h2":
      styling = "text-4xl font-MyFont";
      break;
    case "h1":
      styling = "text-5xl font-MyFont";
      break;
    default:
      break;
  }

  switch (type) {
    case "h1":
      return (
        <h1 type="text" className={`${styling}  font-${weight}`}>
          {text}
        </h1>
      );
      break;
    case "h2":
      return (
        <h2 type="text" className={`${styling}  font-${weight}`}>
          {text}
        </h2>
      );
      break;
    case "h3":
      return (
        <h3 type="text" className={`${styling}  font-${weight}`}>
          {text}
        </h3>
      );
      break;

    default:
      break;
  }
};

Headings.propTypes = {
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

Headings.defaultProps = {
  type: "h1",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem nibh, semper a mi congue, tristique",
};
