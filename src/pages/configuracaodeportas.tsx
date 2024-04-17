import * as React from "react";
import type { HeadFC } from "gatsby";
import ConfiguracaoDePortas from "../pageComponents/ConfiguracaoDePortas";

const ConfiguracaoDePortasPage = () => <ConfiguracaoDePortas />;

export default ConfiguracaoDePortasPage;

export const Head: HeadFC = () => <title>Configuracao de portas</title>;
