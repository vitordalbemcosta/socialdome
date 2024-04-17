import * as React from "react";
import type { HeadFC } from "gatsby";
import Login from "../pageComponents/Login";

const LoginPage = () => <Login />;

export default LoginPage;

export const Head: HeadFC = () => <title>Log in</title>;
