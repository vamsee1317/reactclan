import React from "react";

const ReactProps = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React Props – Explained Simply
      </h2>

      {/* Intro */}
      <p className="text-gray-600 text-lg">
        In React, <span className="font-semibold">props</span> (short for
        <em> properties</em>) are used to send data from one component to another.
        They allow components to receive information and display it.
      </p>

      {/* Why Props */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why do we use Props?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To share data between components</li>
          <li>To make components reusable</li>
          <li>To change what a component displays</li>
        </ul>

        <p className="text-gray-600">
          Instead of hardcoding values inside a component, props let the parent
          control what data the child shows.
        </p>
      </section>

      {/* How Props Work */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          How do Props work?
        </h3>

        <p className="text-gray-600">
          Props are passed from a <strong>parent component</strong> to a{" "}
          <strong>child component</strong>, just like arguments passed to a
          function.
        </p>
      </section>

      {/* Basic Example */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Basic Props Example
        </h3>

        <div>
          <p className="font-medium text-gray-700 mb-2">
            Parent Component
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`function Parent() {
  return <Greeting name="Vamsi" />;
}`}</code>
          </pre>
        </div>

        <div>
          <p className="font-medium text-gray-700 mb-2">
            Child Component (using props)
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}`}</code>
          </pre>
        </div>
      </section>

      {/* Destructuring */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Destructuring Props
        </h3>

        <p className="text-gray-600">
          Instead of writing <code className="bg-gray-200 px-1 rounded">props.name</code>{" "}
          every time, we can <strong>destructure</strong> props for cleaner code.
        </p>

        <div>
          <p className="font-medium text-gray-700 mb-2">
            Without Destructuring
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}`}</code>
          </pre>
        </div>

        <div>
          <p className="font-medium text-gray-700 mb-2">
            With Destructuring
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{`function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}`}</code>
          </pre>
        </div>

        <p className="text-gray-600">
          Both versions work the same. Destructuring just makes the code easier
          to read and write.
        </p>
      </section>

      {/* Real-world Props */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Real-World Examples of Props
        </h3>

        <p className="text-gray-600">
          In real applications, these are common values passed as props:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>username</strong> – Display logged-in user name</li>
          <li><strong>email</strong> – Show user email in profile</li>
          <li><strong>profileImage</strong> – User avatar</li>
          <li><strong>price</strong> – Product price in e-commerce</li>
          <li><strong>title</strong> – Card or page heading</li>
          <li><strong>description</strong> – Product or post details</li>
          <li><strong>isLoggedIn</strong> – Show or hide UI</li>
          <li><strong>buttonText</strong> – Reusable button label</li>
          <li><strong>rating</strong> – Product or movie rating</li>
          <li><strong>onClick</strong> – Action when button is clicked</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-blue-800 font-medium">
          👉 Props allow data to flow from parent to child. They make components
          reusable, predictable, and easy to maintain.
        </p>
      </div>

    </div>
  );
};

export default ReactProps;
