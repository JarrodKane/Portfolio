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
      className={`w-10/12 h-52 bg-profile-image bg-cover bg-center  rounded-r-lg shadow-xl  flex items-end mt-12 mb-4`}
      {...props}
    >
      <Headings type="h1" text="Jarrod Kane" />
    </div>
  );
}

export default ProfileImage;
