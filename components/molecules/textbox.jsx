import React from "react";

import { Headings } from "../atoms/headings";
import { Text } from "../atoms/text";
import { Icon } from "../atoms/icon";

const Textbox = ({ heading, text, props, linkRef, imageFile }) => {
  return (
    <div
      className={`p-4 m-2 md:p-6 bg-gray-700  inner-text-shadow rounded-md shadow-md ${props}`}
    >
      {heading ? <Headings /> : null}
      {text ? <Text text={text} props={`text-white`} /> : null}
      {linkRef ? (
        <Icon
          props={`w-12 p-2 mx-3 bg-gray-200`}
          linkRef={linkRef}
          imageFile={imageFile}
        />
      ) : null}
    </div>
  );
};

export default Textbox;
