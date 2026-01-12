import React from "react";

export default function ReactJavaScriptXml() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        JSX (JavaScript XML) – Explained Simply
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is JSX?
        </h3>
        <p className="text-gray-600">
          JSX stands for <strong>JavaScript XML</strong>. It allows us to write
          HTML-like code inside JavaScript.
        </p>
        <p className="text-gray-600">
          JSX makes React code easier to read and understand.
        </p>
      </section>

      {/* Why JSX */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why do we use JSX?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Makes UI code readable</li>
          <li>Combines HTML and JavaScript logic</li>
          <li>Helps write cleaner React components</li>
          <li>Improves developer experience</li>
        </ul>
      </section>

      {/* JSX vs HTML */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          JSX vs HTML (Key Differences)
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Use <code className="bg-gray-200 px-1 rounded">className</code> instead
            of <code className="bg-gray-200 px-1 rounded">class</code>
          </li>
          <li>
            JSX must return a <strong>single parent element</strong>
          </li>
          <li>
            JavaScript expressions are written inside{" "}
            <code className="bg-gray-200 px-1 rounded">{`{ }`}</code>
          </li>
          <li>
            Attribute names use <strong>camelCase</strong>
          </li>
        </ul>
      </section>

      {/* JSX Example */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Simple JSX Example
        </h3>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function Welcome() {
  const name = "Vamsi";

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>Welcome to React</p>
    </div>
  );
}`}</code>
        </pre>

        <p className="text-gray-600">
          JavaScript variables are inserted using{" "}
          <code className="bg-gray-200 px-1 rounded">{`{ }`}</code>.
        </p>
      </section>

      {/* Rules of JSX */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Rules of JSX
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>JSX expressions must have one parent element</li>
          <li>All tags must be properly closed</li>
          <li>JavaScript code must be inside curly braces</li>
          <li>JSX is converted to JavaScript by Babel</li>
        </ul>
      </section>

      {/* JSX Behind the Scenes */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          How JSX Works Behind the Scenes
        </h3>

        <p className="text-gray-600">
          JSX is not understood by the browser directly. It is converted into
          regular JavaScript using tools like <strong>Babel</strong>.
        </p>
      </section>

      {/* Summary */}
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
        <p className="text-indigo-800 font-medium">
          👉 JSX allows React developers to write UI code in a clean,
          readable, and powerful way.
        </p>
      </div>

    </div>
  );
}
