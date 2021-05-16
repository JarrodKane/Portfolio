import React from "react";
import Link from "next/link";

const LinkTo = ({ label, address }) => {
  return (
    <Link href={address} className={``}>
      {label}
    </Link>
  );
};

export default LinkTo;
