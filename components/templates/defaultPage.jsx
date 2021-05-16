import React from "react";
import Navigation from "../organisims/Navigation";

export default function DefaultPage({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
}
