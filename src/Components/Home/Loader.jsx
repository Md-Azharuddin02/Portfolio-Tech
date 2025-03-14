import React from 'react';
import { FaCode } from 'react-icons/fa';

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95  z-50">
      <div className="relative max-w-md w-full mx-4">
        {/* Background glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-2xl animate-pulse"></div>
        
        {/* Main content container */}
        <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-amber-500">Loading</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Loading animation container */}
          <div className="flex items-center justify-center py-4">
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full animate-spin"></div>
              
              {/* Inner spinning ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin-fast"></div>
              
              {/* Center icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <FaCode className="text-3xl text-amber-500 animate-bounce-subtle" />
              </div>
            </div>
          </div>

          {/* Progress text */}
          <div className="text-center mt-6">
            <p className="text-gray-300 text-sm animate-pulse-subtle">
              Preparing awesome content
              <span className="inline-block w-8">
                <span className="animate-ellipsis text-amber-500">...</span>
              </span>
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;