import React from "react";

import { Headings } from "../atoms/headings";
import { Text } from "../atoms/text";

const Textbox = ({
  primary,
  backgroundColor,
  size,

  children,
}) => {
  return <div className={`w-full  p-4`}>{children}</div>;
};

export default Textbox;
