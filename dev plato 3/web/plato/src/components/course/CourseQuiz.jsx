import { RadioGroup } from '@headlessui/react';
import React from 'react';
import { useState } from 'react';
import QuillEditor from '../../helpers/QuillEditor';
import ConfirmModal from '../modal/ConfirmModal';
import SuccessAlertModal from '../modal/SuccessAlertModal';

const CourseQuiz = ({ quiz }) => {
  const [inProgress, setInProgress] = useState(quiz.inProgress);
  const [isDone, setIsDone] = useState(quiz.isDone);
  const [multipleAnswer, setMultipleAnswer] = useState('');
  const [idQuestion, setIdQuestion] = useState(0);
  const [essayAnswer, setEssayAnswer] = useState('');
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log(essayAnswer);
  return (
    <>
      <div className="flex items-center justify-between p-10">
        <div className="flex w-full flex-col gap-5">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Socket IO - Introduction</h1>
            </div>
            <div className="flex gap-3 text-slate-400">
              <h2>Quiz 1</h2>
              <div className="border-r border-slate-400" />
              <h2>4 Question</h2>
            </div>
          </div>
          <div>
            {inProgress === false && isDone === false && (
              <div>
                <button
                  className="rounded-xl bg-slate-500 p-2 text-sm text-slate-200"
                  onClick={() => setInProgress(true)}>
                  Start Quiz
                </button>
              </div>
            )}
            {inProgress === true && (
              <div className="flex flex-col gap-4">
                {quiz.questionsList.map((item, i) => {
                  if (item.questionType === 'multiple' && i === idQuestion) {
                    return (
                      <React.Fragment>
                        <div>
                          <h2>
                            ({i + 1}/{quiz.questionsList.length})
                          </h2>
                          <h2>{item.question}</h2>
                        </div>
                        <RadioGroup
                          value={multipleAnswer}
                          onChange={setMultipleAnswer}
                          className="flex flex-col gap-2">
                          {item.answerOptions.map((option, i) => (
                            <RadioGroup.Option value={option}>
                              {({ checked }) => (
                                <div
                                  className={
                                    checked
                                      ? 'rounded-md border border-slate-500 bg-blue-400 p-2 text-slate-200'
                                      : 'cursor-pointer rounded-md border border-slate-500 p-2'
                                  }>
                                  <span className="text-sm">{option}</span>
                                </div>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </RadioGroup>
                        <div className="flex justify-between">
                          {/* <button className='p-2 border border-slate-400 text-sm hover:bg-blue-600 text-slate-400 rounded-md hover:text-slate-200'>Back</button> */}

                          {i === quiz.questionsList.length ? (
                            <>
                              <button
                                className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                                onClick={() => {
                                  setIdQuestion(idQuestion - 1);
                                }}>
                                Previous
                              </button>
                              <button
                                className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                                onClick={() => {
                                  setInProgress(false);
                                  setIsDone(true);
                                }}>
                                Finalize
                              </button>
                            </>
                          ) : (
                            <>
                              <div />
                              <button
                                className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                                onClick={() => {
                                  setIdQuestion(idQuestion + 1);
                                }}>
                                Next
                              </button>
                            </>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  } else if (item.questionType === 'essay' && i === idQuestion) {
                    return (
                      <React.Fragment>
                        <div>
                          <h2>
                            ({i + 1}/{quiz.questionsList.length})
                          </h2>
                          <h2>{item.question}</h2>
                        </div>
                        <div>
                          <QuillEditor value={essayAnswer} setValue={setEssayAnswer} />
                        </div>
                        <div className="flex justify-between">
                          {/* <button className='p-2 border border-slate-400 text-sm hover:bg-blue-600 text-slate-400 rounded-md hover:text-slate-200'>Back</button> */}
                          {i === quiz.questionsList.length - 1 ? (
                            <>
                              <button
                                className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                                onClick={() => {
                                  setIdQuestion(idQuestion - 1);
                                }}>
                                Previous
                              </button>
                              <button
                                className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                                onClick={() => {
                                  setIsOpenConfirm(true);
                                }}>
                                Selesai
                              </button>
                            </>
                          ) : (
                            <button
                              className="rounded-md border border-slate-400 p-2 text-sm text-slate-400 hover:bg-blue-600 hover:text-slate-200"
                              onClick={() => {
                                setIdQuestion(idQuestion + 1);
                              }}>
                              Next
                            </button>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        {inProgress === false && (
          <div>
            <div className="flex h-36 w-48 flex-col items-center gap-6 bg-[#191997] p-4">
              <div className="text-2xl font-semibold text-slate-200">
                <h1>Score</h1>
              </div>
              <div className="text-2xl text-slate-200">
                <span>-</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <ConfirmModal open={isOpenConfirm} setIsOpen={setIsOpenConfirm} setIsSuccess={setIsSuccess} />
      <SuccessAlertModal
        success={isSuccess}
        setIsSuccess={setIsSuccess}
        setInProgress={setInProgress}
        setIsDone={setIsDone}
      />
    </>
  );
};

export default CourseQuiz;
