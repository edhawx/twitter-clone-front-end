import '../src/styles/App.css';
import React, { useState } from 'react';
import TweetList from './components/TweetList/TweetList';
import NewTweet from './components/NewTweet/NewTweet';
import NavBar from './components/NavBar/NavBar';

interface Tweet {
  id: number;
  content: string;
  username: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const addTweet = (content: string) => {
    const newTweet: Tweet = {
      id: tweets.length + 1,
      content,
      username: 'CurrentUser',
      timestamp: new Date().toISOString(),
    };
    setTweets([newTweet, ...tweets]);
  };



  return (
    <div className="App">
      <div className="main-container">
      <NavBar />
      <div className="main-content">
      <header className="App-header">
        <h1>Twitter Clone</h1>
        <NewTweet onAddTweet={addTweet} />
        <TweetList tweets={tweets}/>
      </header>
      </div>
      </div>
    </div>
  );
}

export default App;
