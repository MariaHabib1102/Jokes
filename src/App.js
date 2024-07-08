import React from 'react';
import logo from '../src/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from './Components/jokes';
import './Components/jokes.css';
import background2 from './background2.jpeg';
import background from '../src/background.jpg';

function App() {
  return (
    <div className="App" >
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" alt="Logo" />
        </a>
      </nav>
      <h1 style={{ backgroundColor: "#c8c81ab5", padding: '10px' }}>Jokes Generator using Jokes API</h1>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Joke />
      </div>
      <div style={{ backgroundColor: "#c8c81ab5", minHeight: '40vh' }}></div>
    </div>
  );
}

export default App;
