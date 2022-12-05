import React from 'react'
import dayjs from 'dayjs';
import { newsList } from './NewsRightBarMainPage';

export default function NewsCenterList() {

    // const handleLike = (id, key, index) => {
    //     setLike({ likedById: user?._id, newsId: id }).then((res) => {
    //       console.log('nando', { key, index, news });
    //       const temp = [...news];
    //       temp[key].contents[index].likes = res?.data?.data?.likes;
    //       setNews(temp);
    //     });
    //   };
    return (
        <div className="cursor-pointer">
            {newsList.map((newsParent) => {
                return (
                    <>
                        <div className="text-[24px] border-t pt-6">
                            <span key={newsParent.title} >
                                {newsParent.title}
                            </span>
                        </div>
                        {newsList.map((item, index) => {
                            return (
                                <div
                                    key={index + item.title}
                                    className="border-b my-4 pb-4 grid grid-cols-5"
                                    onClick={() => {
                                        window.open(item.externalNewsUrl)
                                    }}
                                >
                                    <div className="col-span-2 mr-10 overflow-hidden">
                                        <img src={item.imageUrl} alt={item.source} className='h-full w-full object-contain sm:h-full sm:w-full transition-all hover:scale-125 hover:delay-75'/>
                                    </div>

                                    <div className="col-span-3">
                                        <span className="bg-[#036aa18b] py-1 px-5 rounded-full text-white">{item.category}</span>
                                        <p className="mt-5">{item.title}</p>
                                        <p className="text-[14px] text-[#606060] my-4">{item.description}</p>

                                        <span className="text-[#606060] text-[14px]">

                                            {dayjs(item.publishedAt).format('DD MMMM YYYY')}
                                            <span className="mx-2">•</span>
                                            <a
                                                href="javascript:void(0)"
                                                className='text-[#606060]'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleLike(item?._id, newsParentIndex, index);
                                                }}
                                            >
                                                {item?.likes?.length} suka
                                            </a>

                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                );
            })}
        </div>
    );
};
