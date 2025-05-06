import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import StudentsPage from './pages/StudentsPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <NavBar />
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<Navigate to="/students" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
