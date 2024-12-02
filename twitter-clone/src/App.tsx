import './App.css';
import React from 'react';
import TweetList from './components/TweetList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone</h1>
        <TweetList />
      </header>
    </div>
  );
}

export default App;
