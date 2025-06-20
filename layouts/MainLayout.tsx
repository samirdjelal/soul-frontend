import { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/global.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="main-content" style={{ marginTop: 'var(--header-height)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;