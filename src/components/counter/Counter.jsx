import React, { useState } from "react";

export default function Counter() {
  // ❌ Normal JavaScript variable
  let normalCounter = 0;

  // ✅ React State variable
  const [stateCounter, setStateCounter] = useState(0);

  const incrementNormal = () => {
    normalCounter++;
    console.log("Normal JS Counter:", normalCounter);
  };

  const incrementState = () => {
    setStateCounter(prev => prev + 1);
    console.log("React State Counter:", stateCounter + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center space-y-6">
      <h1 className="text-2xl font-bold">JS Variable vs React State</h1>

      {/* Normal JS Variable */}
      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold">Normal JS Variable</h2>
        <p className="text-3xl my-2">{normalCounter}</p>
        <button
          className="border px-4 py-2"
          onClick={incrementNormal}
        >
          Increment Normal
        </button>
      </div>

      {/* React State Variable */}
      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold">React State Variable</h2>
        <p className="text-3xl my-2">{stateCounter}</p>
        <button
          className="border px-4 py-2"
          onClick={incrementState}
        >
          Increment State
        </button>
      </div>
    </div>
  );
}
