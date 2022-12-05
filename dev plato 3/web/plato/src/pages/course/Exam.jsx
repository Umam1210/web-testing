import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/modal/ConfirmModal';
import SuccessAlertModal from '../../components/modal/SuccessAlertModal';
import QuillEditor from '../../helpers/QuillEditor';
import { storeAnswer } from '../../store/storeAnswer';

const staticExam = [
  {
    id: 1,
    question: 'Who let dog out?',
    value: 30
  },
  {
    id: 2,
    question: 'What is the meaning of amadiketu?',
    options: ['Ambatukam', 'YNTKTS', "I'm addicted to", 'Ayonima'],
    value: 15
  }
];

function Exam() {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState('');
  const answerExamState = storeAnswer((state) => state.answerExam);
  const setterExamState = storeAnswer((state) => state.setAnswerExam);

  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const setNextPrev = (status) => {
    const idQuestion = staticExam[counter].id;
    setterExamState({ counter, answer, idQuestion });

    setCounter((prev) => (status === 'next' ? prev + 1 : prev - 1));
    setAnswer('');
  };

  useEffect(() => {
    if (answerExamState[counter]) setAnswer(answerExamState[counter].answer);
  }, [counter]);

  useEffect(() => {
    isDone && navigate('/course/view');
  }, [isDone]);

  return (
    <>
      {/* COURSE MATERIAL */}
      <div className="col-span-8">
        {/* MAIN */}
        <div className="aspect-video w-full">
          {/* HEAD */}
          <div className="mb-3 flex items-center justify-between bg-teal-100 px-5 py-3">
            <div className="">
              <p className="text-xl font-bold">Middle Exam</p>
              <span className="text-sm font-bold">Socket IO</span>
            </div>
            <span className="text-bold rounded-2xl bg-teal-50 px-3 py-1 text-red-600">
              00:01:30:00
            </span>
          </div>
          {/* QUESTION */}
          <div className="flex flex-auto flex-col">
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
                        className={`cursor-pointer border border-solid border-slate-500 px-2 py-1 text-sm ${
                          data === answer && 'bg-sky-600 text-white'
                        }`}
                        onClick={() => setAnswer(data)}>
                        {data}
                      </p>
                    ))
                  ) : (
                    <QuillEditor value={answer} setValue={setAnswer} />
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                {counter !== 0 ? (
                  <button
                    className="rounded-2xl bg-teal-300 px-2 py-1 font-bold text-sky-700"
                    onClick={() => setNextPrev('prev')}>
                    Sebelumnya
                  </button>
                ) : (
                  <div />
                )}
                {counter === staticExam.length - 1 ? (
                  <button
                    className="rounded-2xl bg-teal-300 px-2 py-1 font-bold text-sky-700"
                    onClick={() => setIsOpenConfirm(true)}>
                    Selesai
                  </button>
                ) : (
                  <button
                    className="rounded-2xl bg-teal-300 px-2 py-1 font-bold text-sky-700"
                    onClick={() => setNextPrev('next')}>
                    Berikutnya
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MAP BOX */}
      <div className="sticky top-24 col-span-4 h-fit">
        <p className="mb-4 text-xl font-bold">Question Map</p>
        <div className="rounded border border-solid border-slate-500 p-3">
          <p className="mb-2 text-sm">Daftar Pertanyaan</p>
          <div className="grid grid-cols-8 gap-1">
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
      <ConfirmModal open={isOpenConfirm} setIsOpen={setIsOpenConfirm} setIsSuccess={setIsSuccess} />
      <SuccessAlertModal success={isSuccess} setIsSuccess={setIsSuccess} setIsDone={setIsDone} />
    </>
  );
}

export default Exam;
