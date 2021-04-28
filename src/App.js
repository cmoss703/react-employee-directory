import React from 'react';
import './App.css';
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import API from "./utils/API";

function App() {

    return (
      <div>
        <Navbar />
        <Table />
      </div>
    );
  }

export default App;
