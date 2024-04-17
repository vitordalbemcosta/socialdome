import React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";

const ControleDePortas = () => {
  return (
    <>
      <Title>Controle De Portas</Title>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

export default ControleDePortas;

export const Head: HeadFC = () => <title>ControleDePortas</title>;
