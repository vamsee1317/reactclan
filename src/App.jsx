import React from 'react'
import {Header as Head} from './components/header/Header'
import Footer from './components/footer/Footer'
import ReactProps from './components/theory/ReactProps'
import ReactIntro from './components/theory/ReactIntro'
import ReactComponents from './components/theory/ReactComponents'
import ReactState from './components/theory/ReactState'
import ReactJavaScriptXml from './components/theory/ReactJavaScriptXml'
import ReactFragments from './components/theory/ReactFragments'
import ReactEvents from './components/theory/ReactEvents' 
import Counter from './components/counter/Counter'
import ReactConditionalRendering from './components/theory/ReactConditionalRendering'
import ReactRouting from './components/theory/ReactRouting'
import ReactForms from './components/theory/ReactForms'

export default function App() {

  // const userName = "VamseeKrishna";
  // const userInfo = ["Vamsee", "Krishna", 25, "India"];
  const userInfo = {
    firstName: "Vamsee",
    lastName: "Krishna",
    age: 25,
    country: "India"
  }

  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-200 p-4 text-center text-white">
        Hello world!
      </h1>

      <Counter />

    {/* <Head  userName={userName} /> */}
    <Head  userData={userInfo} />
    <ReactIntro />
    <ReactComponents />
    <ReactProps />
    <ReactState />
    <ReactJavaScriptXml />
    <ReactFragments />
    <ReactEvents />
    <ReactConditionalRendering />
    <ReactRouting />
    <ReactForms />
    <Footer />
    </>
  )
}
