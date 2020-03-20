import React from 'react';
import './App.css';
import { clients } from '../clients';
import ClientsList from '../components/ClientsList';

function App() {
  return (
    <div className="App">
      <ClientsList clients={clients}/>
    </div>
  );
}

export default App;
