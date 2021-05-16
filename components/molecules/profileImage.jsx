import React from "react";

import { Headings } from "../atoms/headings";

function ProfileImage({
  imageFile,
  primary,
  backgroundColor,
  size,

  ...props
}) {
  return (
    <div
      type="profileImage"
      className={`w-10/12 h-52 bg-red-300 rounded-lg shadow-xl  flex items-end `}
      {...props}
    >
      <Headings type="h1" text="Jarrod Kane" />
    </div>
  );
}

export default ProfileImage;
