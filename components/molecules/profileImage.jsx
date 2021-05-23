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
      className={`w-10/12 h-52 bg-profile-image bg-cover bg-center  rounded-r-lg  shadow-md  flex items-end mt-12 mb-4 p-3 `}
      {...props}
    >
      <h1
        type="h1"
        text="Jarrod Kane"
        props={`text-gray-50 font-black text-3xl font-MyFont `}
        className={`text-gray-50  text-3xl font-bold font-MyFont  inner-text-shadow`}
      >
        Jarrod Kane
      </h1>
    </div>
  );
}

export default ProfileImage;
