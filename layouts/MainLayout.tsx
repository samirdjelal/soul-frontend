// src/layouts/MainLayout.tsx

import { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main
        style={{
          padding: "6rem 1rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
