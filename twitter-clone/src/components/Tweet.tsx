import React from "react";

interface TweetProps {
    content: string;
    username: string;
    timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ content, username, timestamp}) => {
    return (
        <div className="tweet">
            <h3>@{username}</h3>
            <p>{content}</p>
            <small>{new Date(timestamp).toLocaleString()}</small>
        </div>
    );
};

export default Tweet;