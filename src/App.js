import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import QuestionBank from "./Screens/QuestionBank/QuestionBank";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import QuestionPage from "./Components/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} />
        <Route path="/questionbank" element={<QuestionBank></QuestionBank>} />
        <Route path="/questionpage/:QId"  element={<QuestionPage />} />
      </Routes>
      <div className=" text-base text-Red">
        {/* Grand Master - Advantis */}
        {/* <Button variant="contained">Contained</Button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
