import React from "react";

export default function ReactState() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React State – Explained Simply
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is State in React?
        </h3>
        <p className="text-gray-600">
          <strong>State</strong> is a built-in object in React that is used to
          store <strong>data that can change</strong> over time.
        </p>
        <p className="text-gray-600">
          When state changes, React automatically updates the UI.
        </p>
      </section>

      {/* Why State */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why do we need State?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To handle dynamic data</li>
          <li>To update the UI based on user actions</li>
          <li>To track changes like clicks, inputs, or toggles</li>
        </ul>

        <p className="text-gray-600">
          Without state, React applications would be static and non-interactive.
        </p>
      </section>

      {/* Props vs State */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          State vs Props (Quick Comparison)
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>State</strong> is managed inside the component</li>
          <li><strong>Props</strong> are passed from parent to child</li>
          <li>State can change; props are read-only</li>
        </ul>
      </section>

      {/* Example */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Simple State Example
        </h3>

        <p className="text-gray-600">
          Below is a basic example where state is used to count button clicks.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}</code>
        </pre>

        <p className="text-gray-600">
          Each click updates the state, and React re-renders the UI automatically.
        </p>
      </section>

      {/* Key Points */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Key Points to Remember
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>State is created using <code className="bg-gray-200 px-1 rounded">useState</code></li>
          <li>Never modify state directly</li>
          <li>State updates trigger re-render</li>
          <li>Each component can have its own state</li>
        </ul>
      </section>

      {/* Real World Examples */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Real-World Examples of State
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Form input values</li>
          <li>Login / logout status</li>
          <li>Theme toggle (light / dark)</li>
          <li>Counter value</li>
          <li>Modal open / close state</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
        <p className="text-orange-800 font-medium">
          👉 State allows React components to be dynamic, interactive, and
          responsive to user actions.
        </p>
      </div>

    </div>
  );
}
