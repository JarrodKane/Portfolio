import React from "react";
import Link from "next/link";

const LinkTo = ({ label, address, props }) => {
  return (
    <Link href={address}>
      <div
        className={`flex justify-center items-center w-full h-28 hover:bg-gray-200 cursor-pointer ${props}`}
      >
        {label}
      </div>
    </Link>
  );
};

export default LinkTo;
