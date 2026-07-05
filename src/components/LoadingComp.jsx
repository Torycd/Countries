import React from "react";

export default function LoadingComp() {
  return (
    <div className="flex flex-col items-center gap-10 h-dvh justify-center">
      <h2 className="text-xl font-bold">Loading Countries...</h2>

      <p>Please wait while we fetch the countries.</p>
    </div>
  );
}
