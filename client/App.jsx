import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div className="main">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/home" element={<ChatContainer currentUser={username} />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;