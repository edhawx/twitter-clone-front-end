import React, { useState } from "react";
import ImageUploader from "../ImageUploader/ImageUploader";

interface NewTweetProps {
    onAddTweet: (content: string, image?: File) => void;
}

const NewTweet: React.FC<NewTweetProps> = ({ onAddTweet }) => {
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        if(!content.trim() && !image) {
            alert('You must add text or an image to tweet.');
            return;
        }

        onAddTweet(content.trim(), image || undefined);
        setContent('');
        setImage(null);
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
            <ImageUploader onImageSelect={setImage} image={image}/>
            <button type="submit" className="new-tweet-button">
                Tweet
            </button>
        </form>
    )
};

export default NewTweet;

