import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Store from './Components/Store';
import './index.css'
import Navbar from './Components/Navbar';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Store/:productId" element={<Store />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
