import React from "react";
import Navigation from "../organisims/Navigation";
import BackToTop from "../organisims/backToTop";
import { color_background } from "../../constants/colors";

export default function DefaultPage({ children, props }) {
  return (
    <div className={` bg-gray-100 min-h-screen w-full`}>
      {/* <Navigation /> */}
      <div className={`${props} `}>{children}</div>
      {/* <BackToTop /> */}
    </div>
  );
}
