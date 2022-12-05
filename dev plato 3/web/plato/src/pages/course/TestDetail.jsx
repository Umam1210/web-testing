import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../api/api';

export default function TestDetail() {
    let navigate = useNavigate()
    let {id} = useParams()
    const { data , isFetching, isLoading } = useQuery(["testData"], async () =>
    await API.get("/artikel/" + id ).then((res) => res.data.data)
 );


 const handleDelete = async () => {
    await API.delete("/artikel/" + id);
    navigate('/course')
  };

 if(isLoading){
    return (
    <div>
        lagi loading
    </div>
    )
 }

 console.log("ini data test", data);
  return (
    <div className="bg-white w-full">
    <div className="w-[30rem]">
        <div
        // key={index}
        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="aspect-square overflow-hidden bg-gray-200 group-hover:opacity-75">
            <img
              src={data?.image}
            //   alt={data.image}
              className="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <p className="text-xs text-gray-500">By {data?.desc}</p>

            <div className="mt-6 h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-1 w-[45%] rounded-full bg-blue-600"></div>
            </div>
            <p className="mt-2 text-xs text-gray-500">45% Complete</p>
          </div>
     <button className='bg-red-600 w-16 my-3 mx-3 rounded-md'
     onClick={handleDelete}
     >delete</button>

     <button className='bg-blue-700 w-16 my-3 mx-3 rounded-md'>
        <Link to={`/edit/${data.id}`}>
        edit
        </Link>
     </button>
        </div>
    </div>
    <div>{isFetching ? "Updating..." : ""}</div>
  </div>
  )
}
