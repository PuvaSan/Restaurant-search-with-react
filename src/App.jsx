import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';



function App() {
  return (
    <div>
      <Navbar />
      <div className="div app-body">
        <Sidebar />
        <CafeList />
      </div>
    </div>
  );
}

export default App;
