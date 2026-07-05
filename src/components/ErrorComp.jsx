import React from "react";
import { useRouteError } from "react-router";

export default function ErrorComp() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center gap-10 h-dvh justify-center">
      <h1>{error.message}</h1>
    </div>
  );
}
