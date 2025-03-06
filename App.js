import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AMPPage from './pages/AMPPage';
import PMPPage from './pages/PMPPage';
import ProgrammaticPage from './pages/ProgrammaticPage';
import AudiencePerCountPage from './pages/AudiencePerCountPage';
import InteractivityPage from './pages/InteractivityPage';
import ExtrapolationPage from './pages/ExtrapolationPage';
import ContactPage from './pages/ContactPage';
import ConsumerPrivacyPage from './pages/ConsumerPrivacyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CompanyPage from './pages/CompanyPage';
import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Update body class for proper spacing
  useEffect(() => {
    document.body.className = isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded';
    
    return () => {
      document.body.className = '';
    };
  }, [isSidebarCollapsed]);
  
  return (
    <Router>
      <div className="app">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <div className={`main-content ${isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
          <Navbar isSidebarOpen={!isSidebarCollapsed} />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/amp" element={<AMPPage />} />
              <Route path="/pmp" element={<PMPPage />} />
              <Route path="/extension/programmatic" element={<ProgrammaticPage />} />
              <Route path="/extension/audience-per-count" element={<AudiencePerCountPage />} />
              <Route path="/extension/interactivity" element={<InteractivityPage />} />
              <Route path="/extension/extrapolation" element={<ExtrapolationPage />} />
              <Route path="/about/contact" element={<ContactPage />} />
              <Route path="/about/consumer-privacy" element={<ConsumerPrivacyPage />} />
              <Route path="/about/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/about/company" element={<CompanyPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App