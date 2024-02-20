import React from 'react';
import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header home={true} projects={false} contact={false}/>
    </div>
  );
}

export default App;
