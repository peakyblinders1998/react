import { useState } from "react";

const Messages = ["Learn React", "Apply For Jobs", "Invest Your new income"];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className=" flex-wrap bg-gray-100 w-full m-20 p-10 items-center lg:w-1/2 ">
      <div className="flex gap-40">
        <div className="bg-gray-300 w-8 rounded-xl text-center active:bg-violet-950">
          1
        </div>
        <div className="bg-gray-300 w-8 rounded-xl text-center active:bg-violet-950">
          2
        </div>
        <div className="bg-gray-300 w-8 rounded-xl text-center active:bg-violet-950">
          3
        </div>
      </div>
      <p className="text-center pt-10 font-extrabold text-2xl">
        step{step}: {Messages[step - 1]}
      </p>
      <div className="flex gap-52 mt-10">
        <button
          className="mr-4 bg-purple-800 text-white px-4 py-2 rounded-xl"
          onClick={handlePrevious}
        >
          previous
        </button>
        <button
          className="bg-purple-800 text-white px-4 py-2 rounded-xl"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
