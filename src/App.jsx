// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import GridView from "./Components/CridView";
import ListView from "./Components/ListView";
import Edit from "./Components/Edit";
import Header from "./Common/Header";
import TableView from "./Components/TableView";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gridview" element={<GridView />} />
          <Route path="/listview" element={<ListView />} />
          <Route path="/tableview" element={<TableView />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
