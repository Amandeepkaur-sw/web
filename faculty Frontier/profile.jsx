import React, { useState } from 'react';

const ProfileImageUpload = () => {
  // State to store the selected image file and its preview URL
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("/default-avatar.png");

  // Handler for image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setSelectedImage(file); // Set the selected image in state
      const imageURL = URL.createObjectURL(file); // Create a URL for the image preview
      setPreviewImage(imageURL); // Update the preview URL
    }
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedImage) {
      // You can implement logic to upload the image to a server here
      // For example, using FormData to send it to a backend
      const formData = new FormData();
      formData.append("profileImage", selectedImage);

      // You can now send `formData` to your backend
      console.log("Form submitted with image:", selectedImage);
    }
  };

  return (
    <div className="profile-image-upload">
      <h2>Set Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-photo-section">
          <div className="profile-photo">
            {/* Show the selected or default image */}
            <img 
              src={previewImage} 
              alt="Profile Preview" 
              style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
            />
          </div>

          <label className="upload-photo-btn">
            Select Profile Image
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ display: 'none' }} 
            />
          </label>
        </div>

        <div className="button-section">
          <button type="submit" className="submit-btn">Upload Image</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileImageUpload;
