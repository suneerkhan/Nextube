import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import SearchResults from './pages/SearchResults';
import './index.css';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setSidebarOpen(o => !o);
    } else {
      setSidebarCollapsed(c => !c);
    }
  };

  const sidebarWidth = isMobile ? 0 : (sidebarCollapsed ? 72 : 240);

  return (
    <div className="app-layout">
      <Navbar onMenuClick={handleMenuClick} />
      <Sidebar open={sidebarOpen || !isMobile} collapsed={sidebarCollapsed} />
      <main
        className="main-content"
        style={{ marginLeft: isMobile ? 0 : sidebarWidth }}
        onClick={() => isMobile && sidebarOpen && setSidebarOpen(false)}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
export default function App() {

  return (
    <ThemeProvider>
      <BrowserRouter basename="/Nextube">
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
