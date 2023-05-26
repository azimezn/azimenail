import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage, PlainIzzy, WebDeveloper, TeacherIzzy, TurkishAzi } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/plainizzy" element={<PlainIzzy />} />
          <Route path="/webdeveloper" element={<WebDeveloper />} />
          <Route path="/teacherizzy" element={<TeacherIzzy />} />
          <Route path="/turkishazi" element={<TurkishAzi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;