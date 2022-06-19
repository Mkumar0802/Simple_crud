import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadProgressBar } from 'axios-progress-bar'
import Home from './components/Home';
import Add from './components/Add'
import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Single from './components/Single'

loadProgressBar()


function App() {
  return (
    <>
<BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
          <Route path="/id/:id" element={<Single />} />
          

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
       
      </BrowserRouter>

    </>
  );
}

export default App;
