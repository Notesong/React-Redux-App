import React from 'react';
import './App.css';

import BeerForm from './components/BeerForm';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brewdog's Beers</h1>
      </header>
      <section>
        <BeerForm />
        <BeerList />
      </section>
    </div>
  );
}

export default App;
