import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader({ height = "40", width = "75" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      visible={true}
    />
  );
}

export default Loader;
