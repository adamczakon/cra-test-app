import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabConfig from './TabConfig';
import { useEffect, useState } from 'react';

function App() {
  const [isScript, setScript] = useState(!!document.getElementById('websdk'));

  useEffect(() => {
    if (document.getElementById('websdk')) {
      setScript(true);
    } else {
      const script = document.createElement('script');

      script.src =
        'https://kyc-process-fiserv-dev.apps.rndlab.online/kycWebSdk.js';
      // script.src = 'http://localhost:4000/kycWebSdk.js';
      // script.src = 'https://xyzwebsdktest.vercel.app/kycWebSdk.js';
      script.id = 'websdk';
      script.defer = true;

      document.head.appendChild(script);
    }
  }, [document.getElementById('websdk')]);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
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
            </div>
          }
        />
        <Route path='config' element={<TabConfig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
