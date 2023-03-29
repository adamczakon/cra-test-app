import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Configure from './Configure';
import * as msTeams from '@microsoft/teams-js';
import { useEffect, useState } from 'react';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    msTeams.initialize(() => {
      setIsInitialized(true);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      {isInitialized && (
        <BrowserRouter>
          <Routes>
            <Route path='/configure' element={<Configure />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
