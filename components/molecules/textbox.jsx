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
    <div
      className={` w-5/6 md:w-4/6  p-4 md:p-6 bg-gray-700  inner-text-shadow rounded-md shadow-md `}
    >
      {heading ? <Headings /> : null}
      {text ? <Text text={text} props={`text-white`} /> : null}
    </div>
  );
};

export default Textbox;
