import CategoryLeftBar from '../../components/marketplace/categoryLeftBar';
import Header from '../../components/marketplace/header';
import ItemListCard from '../../components/marketplace/itemListCard';
import {
  RocketLaunchIcon,
  ShoppingCartIcon,
  StarIcon,
  ArrowPathIcon,
  LanguageIcon,
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  HandRaisedIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/20/solid';
import { HeartIcon, HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Accordion } from 'flowbite-react';
import ReactPlayer from 'react-player/youtube';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import CourseContentsAccordion from '../../components/course/CourseContentsAccordion';
import { useState } from 'react';
import { useCurrentSession } from '../../store/currentSession';
import { useEffect } from 'react';
import CourseExam from '../../components/course/CourseExam';
import CourseQuiz from '../../components/course/CourseQuiz';
import CourseAssignment from '../../components/course/CourseAssignment';

export default function Home() {
  const currentSession = useCurrentSession((state) => state.session);
  const setDefaultCurrentSession = useCurrentSession((state) => state.setCurrentSession);
  // const docs = [
  //   { uri: "https://cdn.filestackcontent.com/t497JULFRDiFdYqRft87" },
  // ];
  useEffect(() => {
    setDefaultCurrentSession({
      subtitle: exampleSchedule[0].materialList[0].title,
      title: exampleSchedule[0].session,
      type: exampleSchedule[0].materialList[0].type,
      files: exampleSchedule[0].materialList[0].files
    });
  }, []);

  return (
    <>
      {/* COURSE MATERIAL */}
      <div className="col-span-8">
        {/* VIDEO */}
        {currentSession.type === 'video' && (
          <div className="aspect-video w-full bg-teal-100">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={currentSession.files[0].uri}
            />
          </div>
        )}
        {/* Document */}
        {currentSession.type === 'document' && (
          <div className="aspect-video w-full bg-teal-100">
            <DocViewer
              documents={currentSession.files}
              pluginRenderers={DocViewerRenderers}
              config={{ header: { disableHeader: true } }}
              style={{ backgroundColor: '#191997' }}
            />
          </div>
        )}

        {currentSession.type === 'quiz' && (
          <div className="aspect-video w-full">
            <CourseQuiz quiz={exampleSchedule[0].materialList[2]} />
          </div>
        )}
        {currentSession.type === 'exam' && <CourseExam />}

        {currentSession.type === 'assignment' && (
          <div className="aspect-video w-full">
            <CourseAssignment assignment={exampleSchedule[0].materialList[3]} />
          </div>
        )}

        <p className="mt-4 max-w-3xl tracking-tight">Socket.IO</p>
        <p className="max-w-3xl text-xl font-bold tracking-tight">
          {currentSession.title} - {currentSession.subtitle}
        </p>
        <div className="flex w-full items-end">
          <a href="#" className="group mt-4 block flex-1">
            <div className="flex items-center">
              <div>
                <span className="relative inline-block">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                </span>
                {/* <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Tom Cook
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View profile
                </p>
              </div>
            </div>
          </a>

          <div className="flex flex-col items-end justify-end">
            <p className="mb-4 mr-2 text-xs font-medium text-gray-700 group-hover:text-gray-900">
              257 students have finished this part!
            </p>
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <HandThumbUpIcon className="mr-2 h-6 w-6 text-blue-500" />
                512
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <HandThumbDownIcon className="mr-2 h-6 w-6 text-gray-400" />
                10
              </button>

              <button
                type="button"
                className="relative ml-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <HandRaisedIcon className="mr-2 h-6 w-6 text-gray-400" />
                Ask
              </button>
              <button
                type="button"
                className="relative ml-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <EllipsisHorizontalIcon className="h-6 w-6 text-gray-400" />
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* COURSE CONTENTS */}
      <div className="sticky top-24 col-span-4 h-fit">
        <p className="mb-4 text-xl font-bold">Course Contents</p>
        {exampleSchedule.map((item, i) => (
          <CourseContentsAccordion key={i} session={item.session} list={item.materialList} />
        ))}
      </div>
    </>
  );
}

const exampleSchedule = [
  {
    session: 'Introduction',
    materialList: [
      {
        title: 'Installation',
        type: 'document',
        files: [
          {
            uri: 'https://cdn.filestackcontent.com/t497JULFRDiFdYqRft87'
          }
        ]
      },
      {
        title: 'Basics',
        type: 'video',
        files: [
          {
            uri: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
          }
        ]
      },
      {
        title: 'Quiz 1',
        type: 'quiz',
        isDone: false,
        inProgress: false,
        questionsList: [
          {
            id: 0,
            questionType: 'multiple',
            question: 'Apa jargon dari Alif Dilan ?',
            answerOptions: ['Ashiaaap', 'Kamu Nanya ??', 'Apaan Tuh?', 'YNTKTS'],
            scoreWeight: 1,
            correctAnswer: 'Kamu Nanya ??'
          },
          {
            id: 1,
            questionType: 'essay',
            question: 'Sebutkan Anggota Akatsuki ?',
            scoreWeight: 1
          }
        ]
      },
      {
        title: 'Assignment 1',
        type: 'assignment',
        isDone: false,
        questionsList: [
          {
            id: 0,
            questionType: 'upload',
            question:
              'Silahkan download soal yang diberikan dan upload jawaban anda sebelum waktu deadline!!',
            scoreWeight: 1,
            attachmentUrl:
              'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            attachment: 'Soal Tugas.pdf'
          }
        ]
      },
      {
        title: 'Middle Exam',
        type: 'exam'
      }
    ]
  }
];
