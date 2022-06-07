import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss';

import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
    <div className="main">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/home" element={</>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;