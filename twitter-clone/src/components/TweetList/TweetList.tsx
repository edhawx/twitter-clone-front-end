import React from "react";
import Tweet from "../Tweet/Tweet";

interface TweetData {
    id: number;
    content: string;
    username: string;
    timestamp: string;
    image?: File;
}

interface TweetListProps {
    tweets: TweetData[];
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
    return (
        <div className="tweet-list">
            {tweets.map((tweet)=>(
                <Tweet
                key={tweet.id}
                content={tweet.content}
                username={tweet.username}
                timestamp={tweet.timestamp}
                image={tweet.image}
                />
            ))}
        </div>
    );
};

export default TweetList;