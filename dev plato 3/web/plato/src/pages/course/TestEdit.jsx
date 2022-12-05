import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { API } from '../../api/api';
import { useState } from 'react';

export default function TestEdit() {
  let navigate = useNavigate();
  let { id } = useParams();

  const { data, isFetching, isLoading } = useQuery(
    ['testEdit'],
    async () => await API.get('/artikel/' + id).then((res) => res.data.data)
  );

  const [form, setForm] = useState({
    title: '',
    image: '',
    desc: ''
  });
  useEffect(() => {
    setForm({
      ...form,
      title: data?.title,
      image: data?.image,
      desc: data?.desc
    });
  }, [data]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      await API.patch(`/artikel/` + id, form);
      navigate('/course');
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
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
            defaultValue={form?.title}
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
            defaultValue={form?.desc}
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
            // defaultValue={data?.image}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          Add
        </button>
      </form>
    </div>
  );
}
