import React from "react";

export default function ReactRouting() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        React Routing – Explained Simply
      </h1>

      {/* Introduction */}
      <section className="space-y-3">
        <p className="text-lg text-gray-600">
          <strong>Routing</strong> means loading different components based on
          the <strong>URL path</strong>.
        </p>
        <p className="text-gray-600">
          In React, routing is handled using a popular library called
          <strong> React Router</strong>.
        </p>
      </section>

      {/* What is React Router */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          What is React Router?
        </h2>
        <p className="text-gray-600">
          React Router is a library that allows navigation between different
          components without reloading the entire page.
        </p>
        <p className="text-gray-600">
          It maps <strong>URL paths</strong> to <strong>React components</strong>.
        </p>
      </section>

      {/* MPA vs SPA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Traditional MPA vs React SPA
        </h2>

        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <p className="font-semibold">Multi-Page Application (MPA)</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Each URL loads a new HTML page</li>
            <li>Browser requests server every time</li>
            <li>Full page reload happens</li>
            <li>Slower user experience</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-md space-y-2">
          <p className="font-semibold">Single-Page Application (SPA)</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Only one HTML page loads initially</li>
            <li>Components change dynamically</li>
            <li>No full page reload</li>
            <li>Faster and smoother UX</li>
          </ul>
        </div>
      </section>

      {/* Short Hand Path */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          URL Handling Difference
        </h2>

        <p className="text-gray-600">
          <strong>Traditional Websites:</strong>  
          New URL → New HTML Page loads
        </p>

        <p className="text-gray-600">
          <strong>React Applications:</strong>  
          New URL → New Component loads
        </p>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Steps to Implement React Router
        </h2>

        {/* Step 1 */}
        <div>
          <h3 className="font-semibold text-gray-700">
            1️⃣ Install React Router
          </h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{`npm install react-router-dom`}</code>
          </pre>
        </div>

        {/* Step 2 */}
        <div>
          <h3 className="font-semibold text-gray-700">
            2️⃣ Wrap App with BrowserRouter
          </h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{`import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>`}</code>
          </pre>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="font-semibold text-gray-700">
            3️⃣ Define Routes
          </h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{`import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}</code>
          </pre>
        </div>

        {/* Step 4 */}
        <div>
          <h3 className="font-semibold text-gray-700">
            4️⃣ Map Paths to Components
          </h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{`<Route path="/contact" element={<Contact />} />`}</code>
          </pre>
        </div>

        {/* Step 5 */}
        <div>
          <h3 className="font-semibold text-gray-700">
            5️⃣ Navigation using Link / NavLink
          </h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{`import { Link } from 'react-router-dom';

<Link to="/about">About</Link>`}</code>
          </pre>
        </div>
      </section>

      {/* Why Link */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why use Link instead of &lt;a&gt; tag?
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>&lt;a&gt; causes full page reload ❌</li>
          <li>Link changes URL without reload ✅</li>
          <li>Preserves SPA behavior</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <p className="text-green-800 font-medium">
          👉 React Router helps build fast, smooth, and scalable navigation
          systems by mapping URLs to components without reloading the page.
        </p>
      </div>

    </div>
  );
}
