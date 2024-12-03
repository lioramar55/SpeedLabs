import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="layout"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        className="main-content"
        style={{
          flex: 1,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
