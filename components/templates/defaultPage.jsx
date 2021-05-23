import React from "react";
import Navigation from "../organisims/Navigation";
import Footer from "../organisims/footer";
import { color_background } from "../../constants/colors";

export default function DefaultPage({ children }) {
  return (
    <div className={` bg-gray-50 min-h-screen flex flex-col`}>
      <Navigation />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
