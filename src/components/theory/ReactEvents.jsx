import React, { useState } from "react";

export default function ReactEvents() {

  // State for like button
  const [likes, setLikes] = useState(0);

  // State for input field
  const [userName, setUserName] = useState("");

  // Click event handler
  const handleClick = () => {
    alert("Button is Clicked!");
  };

  // Like button handler
  const handleLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        React Events – Explained Simply
      </h1>

      {/* Introduction */}
      <section className="space-y-3">
        <p className="text-gray-600 text-lg">
          An <strong>event</strong> is an action performed by the user such as
          clicking a button, typing in an input, or submitting a form.
        </p>
        <p className="text-gray-600">
          In React, events are handled using <strong>event handlers</strong>,
          which are functions that execute when an event occurs.
        </p>
      </section>

      {/* Event Naming */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Event Naming in React
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>React events use <strong>camelCase</strong></li>
          <li>Event handlers are passed as <strong>functions</strong></li>
          <li>Use <code className="bg-gray-200 px-1 rounded">{`{}`}</code> to pass functions</li>
        </ul>
      </section>

      {/* Click Event Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Click Event Example
        </h2>

        <button
          onClick={handleClick}
          className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Click Me
        </button>

        <p className="text-gray-600">
          The <code className="bg-gray-200 px-1 rounded">onClick</code> event
          triggers the <strong>handleClick</strong> function.
        </p>
      </section>

      {/* Like Counter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Updating State using Events
        </h2>

        <p className="text-center text-4xl font-bold text-gray-700">
          {likes}
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleLikes}
            className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
          >
            Like 👍
          </button>
        </div>

        <p className="text-gray-600 text-center">
          Each click updates the state and re-renders the UI.
        </p>
      </section>

      {/* Input Change Event */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Change Event Example
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        <p className="text-gray-600">
          You typed: <strong>{userName || "Nothing yet"}</strong>
        </p>

        <p className="text-gray-600">
          The <code className="bg-gray-200 px-1 rounded">onChange</code> event
          captures user input and updates state.
        </p>
      </section>

      {/* Common Events */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Common React Events
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>onClick</strong> – Button clicks</li>
          <li><strong>onChange</strong> – Input changes</li>
          <li><strong>onSubmit</strong> – Form submission</li>
          <li><strong>onMouseOver</strong> – Mouse hover</li>
          <li><strong>onKeyDown</strong> – Keyboard input</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-yellow-800 font-medium">
          👉 React events allow your application to respond to user interactions
          and make the UI interactive.
        </p>
      </div>

    </div>
  );
}
