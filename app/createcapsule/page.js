'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
export default function CapsuleForm() {
  const { user, isLoaded } = useUser();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    email: '',
  });

  const [image, setImage] = useState(null); // State for the image file

  useEffect(() => {
    if (isLoaded && user) {
      setFormData((prevData) => ({
        ...prevData,
        email: user.primaryEmailAddress.emailAddress,
      }));
    }
  }, [isLoaded, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data with image upload
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("email", formData.email);
    if (image) data.append("image", image);

    try {
      const response = await axios.post("/api/capsule", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response.data
        )

      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
          disabled={!isLoaded}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
          required
          disabled={!isLoaded}
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full"
          required
          disabled={!isLoaded}
        />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 w-full"
          disabled={!isLoaded}
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={!isLoaded}>
        Submit
      </button>
    </form>
  );
}
