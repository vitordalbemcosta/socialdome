import React from "react";
import Layout from "../src/components/Layout";

const wrapPageElement = ({ element, children }) => {
  return React.createElement(Layout, children, element);
};

export default wrapPageElement;
