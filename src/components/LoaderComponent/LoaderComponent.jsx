import React from "react";
import { Ring } from "@uiball/loaders";

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ring size={50} lineWeight={3.5} speed={1} color="yellow" />
    </div>
  );
};

export default LoaderComponent;