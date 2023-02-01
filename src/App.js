import React from "react";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <h1 className="title">New York Times Clone - Developed with React</h1>
      <Articles />
    </div>
  );
}
