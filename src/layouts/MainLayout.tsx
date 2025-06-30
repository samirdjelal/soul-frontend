// MainLayout.tsx
import { type ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/global.css';

interface MainLayoutProps {
  children: ReactNode;
  contentSectionSpacing?: number;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-section-with-spacing">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;