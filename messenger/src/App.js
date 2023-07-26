import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "../src/Pages/Chathere/Chat";
import Homepage from "./Pages/Homepage";
import "../src/App.css";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
