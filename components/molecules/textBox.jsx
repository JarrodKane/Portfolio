import React from "react";

import { Headings } from "../atoms/headings";
import { Text } from "../atoms/text";

const TextBox = ({
  imageFile,
  primary,
  backgroundColor,
  size,

  children,
}) => {
  return <div className={`w-8/12 `}>{children}</div>;
};

export default TextBox;
