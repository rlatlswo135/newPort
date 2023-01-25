import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { Routes, Route } from "react-router-dom";
import { Header } from "@components/Header";
import { Home, Project } from "@pages/index";

export const App = () => {
  return (
    <>
      <Header />
      {/* 라우터 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};
