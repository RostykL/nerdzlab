import { FullScreenCenter } from "../../styled/general.styled";
import { MainContainer, SkewContainer } from "./container.styled";
import Header from "../header/Header";
import React from "react";

function Container({ children }) {
  return (
    <FullScreenCenter>
      <MainContainer>
        <Header />
        <SkewContainer>{children}</SkewContainer>
      </MainContainer>
    </FullScreenCenter>
  );
}

export default Container;
