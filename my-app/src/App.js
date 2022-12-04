import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
        style={{
          padding: "10px",
          width: "10%",
          background: "#f0f0f0"
        }}
        >
        <nav>
          <h3>Headers</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div style={{
          padding: "10px",
          background: "#ffffff"
        }}>
        {/* A <Route> with no path always matches */}
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;