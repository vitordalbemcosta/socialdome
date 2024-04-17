import * as React from "react";
import type { HeadFC } from "gatsby";
import ConfiguracaoDeControladoras from "../pageComponents/ConfiguracaoDeControladoras.tsx";

const ConfiguracaoDeControladorasPage = () => <ConfiguracaoDeControladoras />;

export default ConfiguracaoDeControladorasPage;

export const Head: HeadFC = () => <title>Configuracao de controladoras</title>;
