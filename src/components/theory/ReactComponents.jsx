import React from "react";

export default function ReactComponents() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React Components – Explained Clearly
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is a React Component?
        </h3>
        <p className="text-gray-600">
          A React component is a <strong>reusable piece of UI</strong>.
          It controls what is shown on the screen.
        </p>
        <p className="text-gray-600">
          Think of components like building blocks. Small components combine to
          form a complete application.
        </p>
      </section>

      {/* Why Components */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why do we use Components?
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To reuse UI code</li>
          <li>To keep code clean and organized</li>
          <li>To make applications easier to maintain</li>
          <li>To split large UIs into smaller parts</li>
        </ul>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Types of Components
        </h3>

        <div>
          <p className="font-semibold text-gray-700">
            1️⃣ Functional Components
          </p>
          <p className="text-gray-600">
            Functional components are simple JavaScript functions that return
            JSX. They are the most commonly used today.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mt-2">
            <code>{`function Welcome() {
  return <h3>Welcome to React</h3>;
}`}</code>
          </pre>
        </div>

        <div>
          <p className="font-semibold text-gray-700">
            2️⃣ Class Components (Older)
          </p>
          <p className="text-gray-600">
            Class components were used earlier. Today, functional components are
            preferred.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mt-2">
            <code>{`class Welcome extends React.Component {
  render() {
    return <h3>Welcome to React</h3>;
  }
}`}</code>
          </pre>
        </div>
      </section>

      {/* Structure */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Structure of a Functional Component
        </h3>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function ComponentName() {
  return (
    <div>
      JSX goes here
    </div>
  );
}`}</code>
        </pre>

        <p className="text-gray-600">
          Every functional component must return JSX.
        </p>
      </section>

      {/* Usage */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Using a Component
        </h3>

        <p className="text-gray-600">
          Once created, a component can be used like an HTML tag.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`<Welcome />`}</code>
        </pre>
      </section>

      {/* Summary */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
        <p className="text-purple-800 font-medium">
          👉 React components help you build UI in a reusable, organized, and
          scalable way.
        </p>
      </div>

    </div>
  );
}
