import React, { useState } from 'react';
import QuillEditor from '../../helpers/QuillEditor';
import ConfirmModal from '../modal/ConfirmModal';
import SuccessAlertModal from '../modal/SuccessAlertModal';

const CourseAssignment = ({ assignment }) => {
  const [isDone, setIsDone] = useState(assignment.isDone);
  const [essayAnswer, setEssayAnswer] = useState('');
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log(isDone);
  return (
    <>
      <div className="flex items-center justify-between p-10">
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <div>
                <h1 className="text-2xl font-bold">Socket IO - Introduction</h1>
              </div>
              <div className="flex gap-3 text-slate-400">
                <h2>{assignment.title}</h2>
              </div>
            </div>
            <div>
              <div className="flex h-36 w-48 flex-col items-center gap-6 bg-[#191997] p-4">
                <div className="text-2xl font-semibold text-slate-200">
                  <h1>Score</h1>
                </div>
                <div>
                    {assignment.questionsList.map((item, i) => (
                        <div key={i} className='flex flex-col gap-4'>
                            <h1>{item.question}</h1>
                            <div className='flex gap-3 text-slate-600'>
                                <h2>Deadline: <span className='text-red-700'>00:00:00</span></h2>
                            </div>
                            <div className='flex justify-between items-center p-3 border  rounded-xl bg-blue-300'>
                                <p className='flex items-center gap-2 text-sm'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600 ">
                                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                                            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                                        </svg>
                                    </span>
                                    <span className='text-slate-700'>{item.attachment}</span>
                                </p>
                                <a target="_blank" rel='noreferrer' className='text-sm text-red-600' href={item.attachmentUrl}>Download</a>  
                            </div>
                            {isDone === false && (
                                <>
                                    <div className='p-3 border  rounded-xl border-slate-400'>
                                        <input className='' type="file" name="" id="" />
                                    </div>
                                    <div>
                                        <QuillEditor value={essayAnswer} setValue={setEssayAnswer} />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div />
                                        <button className='p-2 border border-slate-400 text-sm hover:bg-blue-600 text-slate-400 rounded-md hover:text-slate-200' onClick={() => setIsOpenConfirm(true)}>Confirm</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {assignment.questionsList.map((item, i) => (
              <div className="flex flex-col gap-4">
                <h1>{item.question}</h1>
                <div className="flex gap-3 text-slate-600">
                  <h2>
                    Deadline: <span className="text-red-700">00:00:00</span>
                  </h2>
                </div>
                <div className="flex items-center justify-between rounded-xl border  bg-blue-300 p-3">
                  <p className="flex items-center gap-2 text-sm">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-red-600 ">
                        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{item.attachment}</span>
                  </p>
                  <a target="_blank" className="text-sm text-red-600" href={item.attachmentUrl}>
                    Download
                  </a>
                </div>
                {isDone === false && (
                  <>
                    <div className="rounded-xl border  border-slate-400 p-3">
                      <input className="" type="file" name="" id="" />
                    </div>
                    <div>
                      <QuillEditor value={essayAnswer} setValue={setEssayAnswer} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div />
                      <button
                        className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                        onClick={() => setIsOpenConfirm(true)}>
                        Confirm
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConfirmModal open={isOpenConfirm} setIsOpen={setIsOpenConfirm} setIsSuccess={setIsSuccess} />
      <SuccessAlertModal success={isSuccess} setIsSuccess={setIsSuccess} setIsDone={setIsDone} />
    </>
  );
};

export default CourseAssignment;
