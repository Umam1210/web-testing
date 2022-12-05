import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const staticExam = [
  {
    question: 'Who let dog out?',
    value: 30
  },
  {
    question: 'What is the meaning of amadiketu?',
    options: ['Ambatukam', 'YNTKTS', "I'm addicted to", 'Ayonima'],
    selectedAnswer: 'YNTKTS',
    value: 15
  }
];

function CourseExam() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="aspect-video w-full">
      {/* HEAD */}
      <div className="flex items-center justify-between bg-teal-100 px-5 py-3">
        <div className="">
          <p className="text-xl font-bold">Course Exam</p>
          <span className="text-sm font-bold">middle exam</span>
        </div>
        <Link className="rounded-2xl bg-green-300 px-3 py-1" to="exam/1">
          Start exam
        </Link>
      </div>
      {/* BODY */}
      <div className="mt-3 flex">
        {/* NOTE */}
        <div className="mr-3 w-64 flex-auto flex-col rounded border border-solid border-slate-500">
          <div className="border-b border-solid border-slate-500 bg-neutral-100 p-2">
            <span className="text-sm text-gray-700">Exam Note</span>
          </div>
          <div className="p-2">
            <span className="text-sm text-gray-500">
              Harap kerjakan ujian dengan baik dan benar, trimakasih dan selamat mengerjakan.
            </span>
          </div>
        </div>
        {/* RESULT */}
        <div className="flex w-12 flex-auto flex-col items-center justify-center bg-sky-500 pt-5 pb-10">
          <span className="mb-4 text-xl text-white">Result</span>
          <span className="text-xl text-white">-</span>
        </div>
      </div>
      {/* REVIEW */}
      {/* Need to check for un-finished exam */}
      <div className="mt-3 flex-auto flex-col rounded border border-solid border-slate-500">
        <div className="border-b border-solid border-slate-500 bg-neutral-100 p-2">
          <span className="text-sm text-gray-700">Exam Review</span>
        </div>
        <div className="flex p-2">
          <div className="flex w-64 flex-auto flex-col">
            <div className="mb-2 flex justify-between">
              <span className="text-sm">
                <strong>Pertanyaan {counter + 1}</strong> dari {staticExam.length}
              </span>
              <span className="text-sm">Bobot: {staticExam[counter].value} Point</span>
            </div>
            {/* ANSWER BOX */}
            <div className="rounded border border-solid border-slate-500 p-3">
              <div className="mb-3">
                <p className="mb-2 text-sm">{staticExam[counter].question}</p>
                <div className="flex flex-col gap-1 text-sm">
                  {staticExam[counter].options ? (
                    staticExam[counter].options.map((data, index) => (
                      <p
                        key={index}
                        className={`border border-solid border-slate-500 px-2 py-1 text-sm ${
                          data === staticExam[counter].selectedAnswer && 'bg-sky-600 text-white'
                        }`}>
                        {data}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm">Yo ndak tau kok tanya saya</p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                {counter !== 0 ? (
                  <button
                    className="rounded-2xl bg-teal-300 px-2 py-1 font-bold text-sky-700"
                    onClick={() => setCounter((prev) => prev - 1)}>
                    Sebelumnya
                  </button>
                ) : (
                  <div />
                )}
                {counter < staticExam.length - 1 && (
                  <button
                    className="rounded-2xl bg-teal-300 px-2 py-1 font-bold text-sky-700"
                    onClick={() => setCounter((prev) => prev + 1)}>
                    Berikutnya
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* MINI MAP BOX */}
          <div className="ml-5 w-24 flex-auto rounded border border-solid border-slate-500 p-3">
            <p className="mb-2 text-sm">Daftar Pertanyaan</p>
            <div className="grid grid-cols-6 gap-1">
              {staticExam.map((data, index) => (
                <span
                  className={`rounded px-2 py-1 text-center text-white ${
                    index === counter ? 'bg-yellow-500' : 'bg-lime-900'
                  }`}
                  key={index}>
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseExam;
