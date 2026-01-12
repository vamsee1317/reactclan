import React, { useState } from "react";

export default function ReactConditionalRendering() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        React Conditional Rendering – Explained Simply
      </h1>

      {/* Introduction */}
      <section className="space-y-3">
        <p className="text-gray-600 text-lg">
          <strong>Conditional Rendering</strong> means showing different UI
          content based on a condition.
        </p>
        <p className="text-gray-600">
          Instead of manually changing the UI, React automatically decides
          <strong> what to render</strong> based on the application state.
        </p>
      </section>

      {/* Why Conditional Rendering */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why do we need Conditional Rendering?
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Should all users see the same UI? ❌</li>
          <li>Different users need different access</li>
          <li>UI must respond to user actions</li>
        </ul>

        <p className="text-gray-600">
          Conditional rendering helps build <strong>dynamic and personalized</strong> user interfaces.
        </p>
      </section>

      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Real-World Examples
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Login / Logout buttons</li>
          <li>Admin-only features</li>
          <li>Loading and error messages</li>
          <li>Form validations</li>
        </ul>
      </section>

      {/* React vs JS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conditional Rendering: React vs JavaScript
        </h2>

        <p className="text-gray-600">
          React does not have special syntax for conditional rendering.
          It uses <strong>JavaScript conditions</strong> inside JSX.
        </p>
      </section>

      {/* If Else Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          1️⃣ Using if / else
        </h2>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <h2>Welcome User</h2>;
  } else {
    return <h2>Please Login</h2>;
  }
}`}</code>
        </pre>

        <p className="text-gray-600">
          Best when logic is complex and UI is completely different.
        </p>
      </section>

      {/* Ternary Operator */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          2️⃣ Using Ternary Operator
        </h2>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function AuthButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <button>
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
}`}</code>
        </pre>

        <p className="text-gray-600">
          Best for simple true/false UI changes.
        </p>
      </section>

      {/* Logical AND */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          3️⃣ Using Logical AND (&&)
        </h2>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function AdminPanel() {
  const isAdmin = true;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {isAdmin && <button>Add User</button>}
    </div>
  );
}`}</code>
        </pre>

        <p className="text-gray-600">
          Renders content only when condition is true.
        </p>
      </section>

      {/* Element Variable */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          4️⃣ Using Element Variables
        </h2>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function WelcomeMessage() {
  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = <h2>Welcome User</h2>;
  } else {
    message = <h2>Please Login</h2>;
  }

  return <div>{message}</div>;
}`}</code>
        </pre>

        <p className="text-gray-600">
          Useful when multiple conditions affect the same UI area.
        </p>
      </section>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-blue-800 font-medium">
          👉 Conditional Rendering allows React to show the right UI at the right
          time based on conditions.
        </p>
      </div>

    </div>
  );
}
