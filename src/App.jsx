import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import MainCards from './components/Cards/MainCards';
import WeldingMachine from './components/Cards/WeldingMachine';
import SpareParts from './components/Cards/SpareParts'
import DentPullers from './components/Cards/DentPullers'
import PlasmaCutter from './components/Cards/PlasmaCutter'
import Stock from './components/Cards/Stock'
import Compressor from './components/Cards/Compressor'
import Consumables from './components/Cards/Consumables'
import WeldingConsumable from './components/Cards/WeldingConsumable'


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <main style={{ flexGrow: 1,marginTop:'100px' }}>
            <Routes>
              <Route path="/" element={<MainCards />} />
              <Route path="/welding-machine" element={<WeldingMachine />} />
              <Route path="/dent-pullers" element={<DentPullers />} />
              <Route path="/plasma-cutter" element={<PlasmaCutter />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/spare-parts" element={<SpareParts />} />
              <Route path="/compressors" element={<Compressor />} />
              <Route path="/consumables" element={<Consumables />} />
              <Route path="/welding-consumable" element={<WeldingConsumable/>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
