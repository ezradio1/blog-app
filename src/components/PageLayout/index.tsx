import React from "react";
import type { PageLayoutProps } from "./index.types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Toast from "../Toast";

const PageLayout = (props: PageLayoutProps) => {
  const { children, isSSR = true } = props;
  return (
    <>
      <Container>
        <Navbar />
        <div className="min-h-[calc(100vh-70px-210px)] py-4">
          {!isSSR ? (
            <Provider store={store}>
              <Toast />
              {children}
            </Provider>
          ) : (
            children
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;
