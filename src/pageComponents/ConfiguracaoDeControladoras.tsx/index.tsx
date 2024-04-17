import React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";

const ConfiguracaoDeControladoras = () => {
  return (
    <>
      <Title>Configuracao De Controladoras</Title>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

export default ConfiguracaoDeControladoras;

export const Head: HeadFC = () => <title>ConfiguracaoDeControladoras</title>;
