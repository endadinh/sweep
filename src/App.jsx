import './App.scss';
import { useEffect, useState } from 'react';
import { Web3Provider } from './utils/Web3Provider';
import { getConfig } from './Config/config';


import Home from './pages/Home'
import { connectWallet, listenEvent } from './utils/connectWallet';


function App() {

  const [account, setAccount] = useState(); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      await getConfig();
      await Web3Provider();
      await connectWallet();
    }
    load();
    listenEvent();
   }, []);

  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
