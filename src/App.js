import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// pages
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import BudgetPage from './pages/Budget';
import TermsPage from './pages/Terms';
// css
import './App.css';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/portfolio" Component={PortfolioPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/budget" Component={BudgetPage} />
        <Route path="/terms" Component={TermsPage} />
      </Routes>
    </div>
  );
}

export default App;
