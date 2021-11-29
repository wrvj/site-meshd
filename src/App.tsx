import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './common/Navbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <GlobalStyles styles={{ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
