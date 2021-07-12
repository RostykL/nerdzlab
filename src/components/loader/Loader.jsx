import React from "react";
import { LoaderWrapper } from "./loader.styled";
import Loader from "react-loader-spinner";

function FormLoader({ height = 15, width = 15, props }) {
  return (
    <LoaderWrapper {...props}>
      <Loader type="ThreeDots" color="#00BFFF" height={height} width={width} />
    </LoaderWrapper>
  );
}

export default FormLoader;
