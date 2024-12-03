import React, { useState } from "react";

interface NewTweetProps {
    onAddTweet: (content: string) => void;
}

const NewTweet: React.FC<NewTweetProps> = ({ onAddTweet }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        if(content.trim()) {
            onAddTweet(content);
            setContent('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="new-tweet-form">
            <textarea
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            placeholder="What's happening?"
            rows={4}
            className="new-tweet-input"
            />
            <button type="submit" className="new-tweet-button">
                Tweet
            </button>
        </form>
    )
};

export default NewTweet;

