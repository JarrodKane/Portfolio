import React from "react";

import { Headings } from "../atoms/headings";
import { Text } from "../atoms/text";

const Textbox = ({
  heading,
  text,
  primary,
  backgroundColor,
  size,

  children,
}) => {
  return (
    <div className={`w-full  p-4`}>
      {heading ? <Headings /> : null}
      {text ? <Text text={text} /> : null}
    </div>
  );
};

export default Textbox;
