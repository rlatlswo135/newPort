import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { Routes, Route } from "react-router-dom";
import { Header } from "@components/Header";
import { Home, Project, Portfolio } from "@pages/index";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        {/* 라우터 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Project />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Container>
    </>
  );
};

const Container = tw.div`
px-72 pt-32 pb-24 overflow-y-scroll 
dark:bg-dark
`;
