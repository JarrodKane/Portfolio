import React from "react";

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
      className={`w-10/12 h-52 bg-gray-300 rounded-lg shadow-xl  flex items-end `}
      {...props}
    >
      <div className={``}>Jarrod Kane</div>
    </div>
  );
}

export default ProfileImage;
