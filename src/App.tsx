import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Home } from './screens/home';
import { About } from './screens/about';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Albums } from './screens/albums';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Header />}> */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="albums" element={<Albums />} />
            {/* </Route> */}
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
