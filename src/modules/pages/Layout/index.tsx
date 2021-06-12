import React, { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC = (props) => {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
