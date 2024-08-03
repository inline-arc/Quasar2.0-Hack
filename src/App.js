import React from 'react';
import Forms from './components/form';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebase.js';
import MedicalReports, { Upload } from './components/report.js';
import Summarizer from './components/summ.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Inbox from './components/inbox.js';
import Details from './components/details.js';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/forms" element={<Forms />} /> 
          <Route path="/summarizer" element={<Details/>} />
          <Route path="/report" element={<MedicalReports>
          <Route path="/details" element={<Details/>} />
          </MedicalReports>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
