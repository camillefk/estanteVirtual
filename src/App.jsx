import React from 'react';
import './App.css';
import InicialPage from './screens/inicialPage';
import HomePage from './screens/homePage';
import StatisticPage from './screens/statisticPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/statisticPage" element={<StatisticPage />} />
      </Routes>
    </Router>
  );
}

export default App;
