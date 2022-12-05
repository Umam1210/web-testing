import React, { useState, useEffect } from 'react'
import WebinarList from '../../components/webinar/WebinarList'
import WebinarLeftBar from '../../components/webinar/WebinarLeftBar'
import { newsList } from '../../components/news/NewsRightBarMainPage'
import { webinarsStore } from '../../store/webinarsStore'

// console.log(newsList);

export default function WebinarPage() {
    const setterCourseState = webinarsStore((state) => state.setWebinarList)


    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setterCourseState(newsList)
        setSubjects(newsList);
    }, []);

    return (
        <>
            <div className='col-span-12 flex items-baseline justify-between border-b border-gray-200 pb-6'>
                <p className='text-4xl font-bold'>The Best Collection of Webinars For You</p>
            </div>
            <div className='col-span-3'>
                <WebinarLeftBar setSubjects={setSubjects} />
            </div>
            <div className='col-span-9'>
                <WebinarList subjects={subjects} />
            </div>

        </>
    )
}
