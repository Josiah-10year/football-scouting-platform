import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerProfile from './components/PlayerProfile';
import CreatePlayer from './components/CreatePlayer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/players/:id" element={<PlayerProfile />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;