import React from 'react'

import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import NewsCenterList from './NewsCenterList';
import { useParams } from 'react-router-dom';
import { newsList } from './NewsRightBarMainPage';

export const timeAgo = (date) => {
    const time = dayjs(date).locale('id').fromNow();
    return time;
  };

export default function NewsHeadlines() {
    let navigate = useNavigate()
    let {id} = useParams()
  return (
    <>
       <div
        style={{
          backgroundImage: `url(${(
            newsList[0]?.image || newsList[2]?.imageUrl
          )})`,
        }}
        className="w-full h-[66%] bg-repeat bg-cover grid justify-items-start content-end "
        onClick={() => navigate(`/detail-news/${id}`)}
      >
        {/* <img src={newsList[2]?.imageUrl} alt="Girl in a jacket" className="news-headline-container-images" /> */}
        <div className="text-white bg-[#00000033] w-[60%] py-4 px-6 rounded-tr-[25px]">
          <p className="text-[14px]">{newsList[2]?.category}</p>
          <span className="text-[24px]">{newsList[2]?.title}</span>
          <p className="text-[14px]">
            {newsList[2]?.time || timeAgo(newsList[2]?.publishedAt)}
            <span className="mx-2">•</span>
            <a
              href="javascript:void(2)"
              style={{
                textDecoration: 'none',
                color: `${newsList[2]?.likes?.find((ul) => ul.uid === user._id) ? 'red' : 'black'}`,
                fontWeight: `${
                  newsList[2]?.likes?.find((ul) => ul.uid === user._id) ? 'bold' : 'normal'
                }`
              }}
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     handleLike(newsList[2]?._id, 2);
            //   }}
            >
              {/* {newsList[0]?.likes.length} suka */}
            </a>
            <span className="mx-2">•</span>
            <a
              href="javascript:void(0)"
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
              // onClick={() => handleComment(newsList[0]?._id, 0)}
            >
              {newsList[2]?.commentCount} komentar 2
            </a>
          </p>
        </div>
      </div>

      {/* card news */}
      <div className="grid grid-cols-5 gap-y-5 gap-x-4 my-8">
        {newsList.map(
          (news, index) =>
             (
              <div
                className="group relative flex flex-col overflow-hidden bg-white"
                key={index + news?.title}
                onClick={() => {
                  // navigate(`/berita/${news?._id}/baca`)
                  window.open(news.externalNewsUrl)
                }}
              >
                <div className="aspect-square overflow-hidden bg-gray-200 group-hover:opacity-75 ">
                  <img
                  src={news?.imageUrl}
                    // src={checkImageAvailable(
                    //   news?.imageUrl,
                    //   'https://www.kaistunion.com/include/images/noImage1.png'
                    // )}
                    alt={news?.source}
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full transition-all hover:scale-125 hover:delay-75'
                  />
                </div>
                <span className="px-2">{news?.title.substring(0, 30)}...</span>
              </div>
            )
        )}
      </div>
      <NewsCenterList />
    </>
  )
}
