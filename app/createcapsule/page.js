'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import Loader from '@/components/Loader';

export default function CapsuleForm() {
  const { user, isLoaded } = useUser();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    email: '',
  });

  const [image, setImage] = useState(null); // State for the image file
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [submitting, setSubmitting] = useState(false)

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
      setImagePreview(URL.createObjectURL(file)); // Generate a preview URL for the selected image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data with image upload
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('date', formData.date);
    data.append('email', formData.email);
    if (image) data.append('image', image);

    try {
      setSubmitting(true)
      const response = await axios.post('/api/capsule', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Optional: Reset form and image preview
      setFormData({
        title: '',
        description: '',
        date: '',
        email: user.primaryEmailAddress.emailAddress,
      });
      setSubmitting(false)
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {submitting && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-white text-2xl font-semibold"><Loader /></span>
        </div>
      )}

      <div className='place-items-center' >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-primary-300 p-6 w-[80dvw]   rounded  shadow-md text-white"
        encType="multipart/form-data"
      >
        {imagePreview && (
          <div className="mt-4  ">
            <p className="font-semibold  ">Image Preview</p>
            <img
              src={imagePreview}
              alt="Selected Preview"
              className="mt-2  border rounded shadow-md"
            />
          </div>
        )}
        <div>
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-gray-700 text-white"
            required
            disabled={!isLoaded || submitting}
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-gray-700 text-white"
            required
            disabled={!isLoaded || submitting}
          />
        </div>

        <div>
          <label htmlFor="date" className="block mb-2 font-semibold">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-gray-700 text-white"
            required
            disabled={!isLoaded || submitting}
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-2 font-semibold">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            required
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full rounded bg-gray-700 text-white"
            disabled={!isLoaded || submitting}
          />

        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded disabled:bg-blue-950 "
          disabled={!isLoaded || submitting}
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
}
