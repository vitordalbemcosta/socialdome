import React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";

const ConfiguracaoDePortas = () => {
  return (
    <>
      <Title>Configuracao De Portas</Title>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

export default ConfiguracaoDePortas;

export const Head: HeadFC = () => <title>ConfiguracaoDePortas</title>;
