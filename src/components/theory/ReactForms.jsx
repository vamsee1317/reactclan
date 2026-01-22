import React from "react";

export default function ReactForms() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        React Forms – Complete Beginner Guide
      </h1>

      {/* Forms Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          What are Forms in React?
        </h2>
        <p className="text-gray-600">
          Forms are used to collect user input such as usernames, passwords,
          emails, feedback, and more.
        </p>
        <p className="text-gray-600">
          In React, forms are handled using <strong>state</strong> to control
          input values and user interactions.
        </p>
      </section>

      {/* Why Forms */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why are Forms Important?
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>User registration and login</li>
          <li>Search and filter data</li>
          <li>Submitting feedback or contact details</li>
          <li>Collecting data from users</li>
        </ul>
      </section>

      {/* Verification vs Validation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Verification vs Validation
        </h2>

        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <p className="font-semibold">Validation</p>
          <p className="text-gray-600">
            Validation checks whether the input data is
            <strong> correct and in the expected format</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Email format check</li>
            <li>Password length</li>
            <li>Required fields</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-md space-y-2">
          <p className="font-semibold">Verification</p>
          <p className="text-gray-600">
            Verification confirms whether the provided data
            <strong> actually exists or is true</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>OTP verification</li>
            <li>Email confirmation link</li>
            <li>Phone number verification</li>
          </ul>
        </div>
      </section>

      {/* Authentication vs Authorization */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Authentication vs Authorization
        </h2>

        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <p className="font-semibold">Authentication</p>
          <p className="text-gray-600">
            Authentication checks <strong>who the user is</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Login using username & password</li>
            <li>OTP login</li>
            <li>Biometric login</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-md space-y-2">
          <p className="font-semibold">Authorization</p>
          <p className="text-gray-600">
            Authorization checks <strong>what the user can access</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Admin access</li>
            <li>User permissions</li>
            <li>Role-based dashboards</li>
          </ul>
        </div>
      </section>

      {/* Controlled vs Uncontrolled */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Controlled vs Uncontrolled Components
        </h2>

        <div className="bg-blue-50 p-4 rounded-md space-y-2">
          <p className="font-semibold">Controlled Components</p>
          <p className="text-gray-600">
            In controlled components, form data is handled by
            <strong> React state</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Uses useState</li>
            <li>React controls input value</li>
            <li>Easier validation & debugging</li>
          </ul>

          <pre className="bg-white p-3 rounded-md text-sm overflow-x-auto">
            <code>{`const [name, setName] = useState("");

<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <p className="font-semibold">Uncontrolled Components</p>
          <p className="text-gray-600">
            In uncontrolled components, form data is handled by
            <strong> the DOM itself</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Uses useRef</li>
            <li>Less React control</li>
            <li>Used in simple scenarios</li>
          </ul>

          <pre className="bg-white p-3 rounded-md text-sm overflow-x-auto">
            <code>{`const inputRef = useRef();

<input ref={inputRef} />`}</code>
          </pre>
        </div>
      </section>

      {/* Summary */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <p className="text-green-800 font-medium">
          👉 React Forms help manage user input effectively using state,
          validation, authentication, and controlled components.
        </p>
      </div>

    </div>
  );
}
