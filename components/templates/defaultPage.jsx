import React from "react";
import Navigation from "../organisims/Navigation";

export default function DefaultPage({ children }) {
  return (
    <div className={`bg-gray-50 h-full`}>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}