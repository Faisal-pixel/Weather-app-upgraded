import React from 'react'; 
import './App.css';
import Sidebar from './components/Sidebar';
import Maps from './Pages/Maps'
import Cities from './Pages/Cities'
import Weather from './Pages/Weather'
import Setting from './Pages/Setting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {  

  return (
    <Router>
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
