import React from "react";

const LoadingUI = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="mt-4 text-5xl md:text-8xl font-extrabold  text-gray-600 blur-sm ">OMJ GRAVEYARD</p>  
        <div className="mx-auto animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800 border-solid "></div>
      </div>
    </div>
  );
};

export default LoadingUI;
