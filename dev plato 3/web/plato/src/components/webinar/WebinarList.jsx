import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default function WebinarList({ subjects, limit = 1000 }) {
    return (
        <div className="col-span-12">
            {subjects.length > 0 &&
                subjects.map((item, index) =>
                    limit && index < limit ? (
                        <div
                            key={index}
                            className="border  rounded-xl my-4 grid grid-cols-8 shadow-md py-4"
                        >
                            <div className="col-span-2 flex items-center justify-center p-3">
                                <img src={item.imageUrl} alt={item.source} className='w-64 rounded object-cover' />
                            </div>
                            <div className="col-span-4 mx-4">
                                <p className="">{item.title}</p>
                                <div className='my-2'>
                                    <span className="bg-indigo-900 py-1 px-5 rounded-md text-white">Webinar{''}</span>
                                    <span className="bg-indigo-700 py-1 px-5 rounded-md mx-4 text-white">Certified{''}</span>
                                    <span className="bg-indigo-500 py-1 px-5 rounded-md text-white">Beginner{''}</span>
                                </div>
                                <p className="text-[#606060] text-[14px]">
                                    {dayjs(item.publishedAt).format('DD MMMM YYYY')} | 12:00 WIB
                                </p>
                                <div className='flex'>
                                    <img src={item.imageUrl} alt="" className='w-10 h-10 rounded-full mt-1 mr-2' />
                                    <div className='text-[14px]'>
                                        <p>{item?.author}</p>
                                        <p>CTO {''}</p>
                                    </div>
                                </div>
                                <p className="text-[14px] text-[#606060] ">{item.description}</p>
                            </div>
                            <div className='col-span-2  border-l flex justify-center items-center flex-col'>
                                <div>
                                    <span className='bg-red-500 px-4 rounded-l-lg rounded-r-[1rem] text-center text-white'>{item?.discount}</span>
                                    <span className='text-xs line-through mx-2'> Rp. {item?.price}</span>
                                </div>
                                <span className='text-2xl mb-5 font-bold'>Rp. {item?.price}</span>
                                <Link to={`detail/${item?._id}`}>
                                    <button className='bg-green-600 hover:bg-green-800 w-32 h-8 rounded text-white font-bold'>Detail</button>
                                </Link>
                            </div>
                        </div>
                    ) : null
                )}
            {subjects.length === 0 && (
                <p className='text-center text-2xl'>
                    Webinars is empty
                </p>
            )}
        </div>
    )
}
