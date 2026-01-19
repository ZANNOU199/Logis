import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AddResource from './pages/AddResource';
import FleetManagement from './pages/FleetManagement';
import ImportShipments from './pages/ImportShipments';
import Planning from './pages/Planning';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/fleet" replace />} />
          <Route path="resources/add" element={<AddResource />} />
          <Route path="fleet" element={<FleetManagement />} />
          <Route path="import" element={<ImportShipments />} />
          <Route path="planning" element={<Planning />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;