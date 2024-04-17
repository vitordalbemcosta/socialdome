import * as React from "react";
import type { HeadFC } from "gatsby";
import ControleDePortas from "../pageComponents/ControleDePortas";

const ControleDePortasPage = () => <ControleDePortas />;

export default ControleDePortasPage;

export const Head: HeadFC = () => <title>Controle de portas</title>;
