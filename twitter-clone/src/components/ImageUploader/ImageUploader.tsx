import React, { useState, useRef, useEffect } from 'react';
import './ImageUploader.css';

interface ImageUploaderProps {
  onImageSelect: (image: File | null) => void;
  image: File | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, image }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    if(image === null){
        setPreview(null);
        if(fileInputRef.current) {
            fileInputRef.current.value='';
        }
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);

     
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-uploader">
      <label className="custom-file-label">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-input"
        />
        {preview ? 'Change image' : 'Choose Image'}
      </label>
      {preview && (
        <div className="image-preview-container">
          <img src={preview} alt="Preview" className="image-preview" />
          <button onClick={handleRemoveImage} className="remove-image-overlay">
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;