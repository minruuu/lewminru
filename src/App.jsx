/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*
function App() {
  return (
    <Router>
      <header className="app-header">
        <nav className="navbar">
          <Link to="/" className="nav-link">About</Link>
          <Link to="/tutorials" className="nav-link"></Link>
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </main>
    </Router>
  );
}
*/

import React from 'react'
import { Routes, Route, Link }
  from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/retrofhouse" element={<Tutorials />} />
    </Routes>
  );
}

function Tutorials() {
  return <h2>Browse Tutorials</h2>;
}


export default App