import React from "react";
import Tweet from "./Tweet";

interface TweetData {
    id: number;
    content: string;
    username: string;
    timestamp: string;
}

const TweetList: React.FC = () => {
    const tweets: TweetData[] = [
        {id: 1, content: 'Hello World!', username: 'user1', timestamp: new Date().toISOString()},
        {id: 2, content: 'My second tweet!', username: 'user2', timestamp: new Date().toISOString()},
    ];

    return (
        <div className="tweet-list">
            {tweets.map((tweet)=>(
                <Tweet
                key={tweet.id}
                content={tweet.content}
                username={tweet.username}
                timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
};

export default TweetList;