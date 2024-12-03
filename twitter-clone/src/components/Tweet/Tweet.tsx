import React from "react";
import '../Tweet/Tweet.css';

interface TweetProps {
  content: string;
  username: string;
  timestamp: string;
  image?: File;
}

const Tweet: React.FC<TweetProps> = ({
  content,
  username,
  timestamp,
  image,
}) => {
  return (
    <div className="tweet">
      <h3>@{username}</h3>
      <p>{content}</p>
      <small>{new Date(timestamp).toLocaleString()}</small>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Tweet Attachment"
          className="tweet-image"
        />
      )}
    </div>
  );
};

export default Tweet;
