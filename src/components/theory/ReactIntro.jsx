import React from "react";

export default function ReactIntro() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React – Introduction
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is React?
        </h3>
        <p className="text-gray-600">
          React is a <strong>JavaScript library</strong> used to build
          <strong> user interfaces</strong>, especially for single-page
          applications.
        </p>
        <p className="text-gray-600">
          It helps developers create fast, interactive, and reusable UI
          components.
        </p>
      </section>

      {/* History */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          History of React
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Created by <strong>Jordan Walke</strong> at Facebook</li>
          <li>First released in <strong>2013</strong></li>
          <li>Used initially for Facebook News Feed</li>
          <li>Later adopted by Instagram, Netflix, Airbnb, and many others</li>
        </ul>
      </section>

      {/* Versions */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Versions of React
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>React 15</strong> – Early stable versions
          </li>
          <li>
            <strong>React 16</strong> – Introduced Fragments and Error Boundaries
          </li>
          <li>
            <strong>React 16.8</strong> – Introduced <strong>Hooks</strong>
          </li>
          <li>
            <strong>React 17</strong> – No major changes, focused on upgrades
          </li>
          <li>
            <strong>React 18</strong> – Improved performance and concurrency
          </li>
        </ul>

        <p className="text-gray-600">
          Today, most projects use <strong>React 18</strong>.
        </p>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          React Installation
        </h3>

        <p className="text-gray-600">
          There are two popular ways to create a React project:
        </p>

        {/* Vite */}
        <div>
          <p className="font-semibold text-gray-700 mb-2">
            1️⃣ Using Vite (Recommended)
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`npm create vite@latest my-app
cd my-app
npm install
npm run dev`}</code>
          </pre>
          <p className="text-gray-600 mt-2">
            Vite is faster and lightweight. It is the preferred choice today.
          </p>
        </div>

        {/* CRA */}
        <div>
          <p className="font-semibold text-gray-700 mb-2">
            2️⃣ Using Create React App (CRA)
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`npx create-react-app my-app
cd my-app
npm start`}</code>
          </pre>
          <p className="text-gray-600 mt-2">
            CRA is beginner-friendly but slower compared to Vite.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Key Features of React
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Component-Based</strong> – Build UI using reusable pieces</li>
          <li><strong>JSX</strong> – Write HTML inside JavaScript</li>
          <li><strong>Virtual DOM</strong> – Improves performance</li>
          <li><strong>One-Way Data Flow</strong> – Predictable data handling</li>
          <li><strong>Reusable Components</strong> – Write once, use anywhere</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <p className="text-green-800 font-medium">
          👉 React helps developers build fast, scalable, and maintainable user
          interfaces using components.
        </p>
      </div>

    </div>
  );
}
