import React from "react";

import Navigation from "../components/organisims/Navigation";

export default function lostPage() {
  return (
    <div
      className={`w-full h-screen bg-404-image bg-cover bg-center flex flex-col justify-items-center items-center`}
    >
      <Navigation />
      <div className={`w-full h-full flex items-center justify-center`}>
        <div className="max-w-screen-lg h-28 bg-white rounded-xl shadow-md text-3xl flex items-center p-3">
          Looks like you found the 404 page
        </div>
      </div>
    </div>
  );
}
