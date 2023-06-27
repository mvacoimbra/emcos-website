import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages
import HomePage from './Pages/Home'
import PortfolioPage from './Pages/Portfolio'
import ContactPage from './Pages/Contact';
import BudgetPage from './Pages/Budget';
// css
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/portfolio' Component={PortfolioPage}/>
        <Route path='/contact' Component={ContactPage}/>
        <Route path='/budget' Component={BudgetPage}/>
      </Routes>
    </div>
  );
}

export default App;
