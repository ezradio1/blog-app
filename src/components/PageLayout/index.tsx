import React from "react";
import type { PageLayoutProps } from "./index.types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Container>
        <Navbar />
        <div className="min-h-[calc(100vh-70px-210px)] border">{children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;
