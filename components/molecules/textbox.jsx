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
    <div className={` w-4/6  p-4 bg-gray-700 m-5`}>
      {heading ? <Headings /> : null}
      {text ? <Text text={text} props={`text-white`} /> : null}
    </div>
  );
};

export default Textbox;
