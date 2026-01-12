import React from "react";

export default function ReactFragments() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React Fragments – Explained Simply
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What are React Fragments?
        </h3>
        <p className="text-gray-600">
          React Fragments allow you to group multiple elements together
          <strong> without adding extra HTML elements</strong> to the DOM.
        </p>
        <p className="text-gray-600">
          They help keep the DOM clean and avoid unnecessary wrapper elements.
        </p>
      </section>

      {/* Why Fragments */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why do we need Fragments?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>JSX requires a single parent element</li>
          <li>Extra divs can break layouts and styles</li>
          <li>Fragments avoid unnecessary DOM nodes</li>
          <li>They keep markup clean and semantic</li>
        </ul>
      </section>

      {/* Without Fragment */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Problem Without Fragment
        </h3>

        <p className="text-gray-600">
          Without fragments, we often add extra <code className="bg-gray-200 px-1 rounded">div</code> elements:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function Example() {
  return (
    <div>
      <h3>Title</h3>
      <p>Description</p>
    </div>
  );
}`}</code>
        </pre>
      </section>

      {/* With Fragment */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Solution Using Fragment
        </h3>

        <p className="text-gray-600">
          Using fragments removes the extra wrapper:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code>{`function Example() {
  return (
    <>
      <h3>Title</h3>
      <p>Description</p>
    </>
  );
}`}</code>
        </pre>
      </section>

      {/* Fragment Syntax */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Fragment Syntax
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>
            Short syntax: <code className="bg-gray-200 px-1 rounded">&lt;&gt;&lt;/&gt;</code>
          </li>
          <li>
            Full syntax: <code className="bg-gray-200 px-1 rounded">&lt;React.Fragment&gt;</code>
          </li>
          <li>
            Fragments do not appear in the DOM
          </li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          When should you use Fragments?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Returning multiple elements from a component</li>
          <li>Rendering lists without extra wrappers</li>
          <li>Keeping HTML structure clean</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
        <p className="text-teal-800 font-medium">
          👉 React Fragments let you group elements without adding extra nodes to
          the DOM.
        </p>
      </div>

    </div>
  );
}
