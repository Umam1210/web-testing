import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/api';

export default function TestAddArticle() {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    image: '',
    desc: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value
    });
    console.log('handle change', form);

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      };

      console.log('ini token', JSON.parse(localStorage.getItem('token')));
      // Store data with FormData as object
      const formData = new FormData();
      formData.set('title', form.title);
      formData.set('image', form.image[0], form.image[0].name);

      formData.set('desc', form.desc);

      console.log('form', form);

      // Insert data
      const response = await API.post('/artikel', formData, config);
      console.log(response);

      navigate('/course');
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form className="w-[400px]" onSubmit={(e) => handleSubmit.mutate(e)}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="title"
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="desc"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          Description
        </label>
        <input
          type="text"
          id="desc"
          name="desc"
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="image"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
        Add
      </button>
    </form>
  );
}
