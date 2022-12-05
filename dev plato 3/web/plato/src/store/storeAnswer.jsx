import create from 'zustand';
import { devtools } from 'zustand/middleware'

export const storeAnswer = create(devtools((set) => ({
  answerExam: [],

  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  setAnswerExam: (callback) => {
    const { counter, answer, idQuestion } = callback;

    // return state;
    set((state) => {
      if (typeof state.answerExam[counter] === 'undefined') {
        // state.answerExam.push({ answer, question: idQuestion });

        return { answerExam: [...state.answerExam, { answer, question: idQuestion }] };
      } else {
        state.answerExam[counter].answer = answer;
        return { answerExam: [...state.answerExam] };
      }
    });
  }
})));
