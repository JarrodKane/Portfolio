import React from "react";
import Link from "next/link";

const LinkTo = ({ label, address }) => {
  return (
    <Link href={address}>
      <div
        className={`text-center w-24 md:w-auto cursor-pointer hover:bg-purple-200`}
      >
        {label}
      </div>
    </Link>
  );
};

export default LinkTo;
