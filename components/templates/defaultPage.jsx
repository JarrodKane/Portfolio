import React from "react";
import Navigation from "../organisims/Navigation";
import { color_background } from "../../constants/colors";

export default function DefaultPage({ children }) {
  return (
    <div className={`bg-gray-50 min-h-screen flex flex-col`}>
      <Navigation />
      <div className="flex-grow">{children}</div>
      <div className={` w-full h-10`}>Footer</div>
    </div>
  );
}
