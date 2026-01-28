import React, { useEffect, useState } from "react";

export default function ReactUseEffect() {

  const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /*
    useEffect is used to handle SIDE EFFECTS in React.
    Side effects are operations that happen outside rendering.
  */

  // 2️⃣ useEffect with EMPTY dependency array []
  // Runs ONLY ONCE when the component mounts
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 3️⃣ useEffect with dependency value
  // Runs whenever `count` changes
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  // Example: Event Listener (side effect)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
    1️⃣ useEffect WITHOUT dependency array
    Runs on EVERY render (usually avoided)

    useEffect(() => {
      console.log("Runs on every render");
    });
  */

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        React useEffect Hook
      </h1>

      {/* Introduction */}
      <section className="space-y-2">
        <p className="text-gray-600">
          <strong>useEffect</strong> is a React Hook that allows you to perform
          <strong> side effects</strong> in functional components.
        </p>
        <p className="text-gray-600">
          It replaces lifecycle methods used in class components.
        </p>
      </section>

      {/* Lifecycle Mapping */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          useEffect vs Class Lifecycle Methods
        </h2>

        <ul className="list-disc list-inside text-gray-600">
          <li>componentDidMount → useEffect with []</li>
          <li>componentDidUpdate → useEffect with dependencies</li>
          <li>componentWillUnmount → cleanup function</li>
        </ul>
      </section>

      {/* Syntax */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Syntax
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`useEffect(() => {
  // side effect logic

  return () => {
    // cleanup logic
  };
}, [dependencies]);`}</code>
        </pre>
      </section>

      {/* Dependency Array */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Dependency Array Cases
        </h2>

        <div className="bg-red-50 p-4 rounded-md">
          <p className="font-semibold">1️⃣ No Dependency Array</p>
          <p className="text-gray-600">
            Runs after <strong>every render</strong>.
            Can cause performance issues.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <p className="font-semibold">2️⃣ Empty Dependency Array []</p>
          <p className="text-gray-600">
            Runs <strong>only once</strong> when the component mounts.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-md">
          <p className="font-semibold">3️⃣ With Dependency Values</p>
          <p className="text-gray-600">
            Runs whenever the specified state or prop changes.
          </p>
        </div>
      </section>

      {/* Live Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Live Dependency Example
        </h2>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Increment Count ({count})
        </button>

        <p className="text-gray-600">
          Each click updates <strong>count</strong>, triggering useEffect.
        </p>
      </section>

      {/* Cleanup */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Cleanup Function
        </h2>
        <p className="text-gray-600">
          Cleanup is used to remove side effects like:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Event listeners</li>
          <li>Timers (setInterval, setTimeout)</li>
          <li>Subscriptions</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`return () => {
  // cleanup logic here
};`}</code>
        </pre>
      </section>

      {/* Real-world Uses */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Common Real-World useEffect Scenarios
        </h2>

        <ul className="list-disc list-inside text-gray-600">
          <li>Fetching data (Axios / Fetch)</li>
          <li>Adding event listeners</li>
          <li>Timers & counters</li>
          <li>Updating document title</li>
          <li>Syncing props with state</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-yellow-800 font-medium">
          👉 useEffect controls when and how side effects run, making React
          components predictable and efficient.
        </p>
      </div>

      {/* Screen Width Example */}
      <p className="text-center text-sm text-gray-500">
        Current Screen Width: {screenWidth}px
      </p>

    </div>
  );
}
