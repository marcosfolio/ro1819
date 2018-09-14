import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "../Styles/reset";
import Main from "./Main";
import Header from "./Header";

injectGlobal`${reset}`;

const Wrapper = styled.section`
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <Header />
    <Main />
  </Wrapper>
);

export default App;
