import React from "react";

import { Headings } from "../atoms/headings";
import { Text } from "../atoms/text";

const Textbox = ({ heading, text, props }) => {
  return (
    <div
      className={`p-4 m-2 md:p-6 bg-gray-700  inner-text-shadow rounded-md shadow-md ${props}`}
    >
      {heading ? <Headings /> : null}
      {text ? <Text text={text} props={`text-white`} /> : null}
    </div>
  );
};

export default Textbox;
