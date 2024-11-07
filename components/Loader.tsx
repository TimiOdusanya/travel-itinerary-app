// components/LoadingState.tsx

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-800 z-50">
      <div className="relative flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-blue-500 text-xl font-semibold animate-pulse">
          Please Wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
