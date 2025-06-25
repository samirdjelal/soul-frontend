import { type ReactNode } from "react"; 
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
      <main 
        className="main-content" 
        style={{ 
          marginTop: 'var(--header-height)',
          transform: 'scale(0.8)',
          transformOrigin: 'top center',
          width: '125%', // Compensate for scale
          marginLeft: '-12.5%', // Center the scaled content
          //minHeight: '80vh', // Add this to control the height
          //overflow: 'hidden' // Add this to prevent scrolling issues
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;