import React from "react";
import Navigation from "../organisims/Navigation";
import { color_background } from "../../constants/colors";

export default function DefaultPage({ children }) {
  return (
    <div className={`bg-gray-50 h-full `}>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}
