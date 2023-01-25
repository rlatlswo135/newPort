import React from "react";
import { Content } from "./Content";
import { Info } from "./Info";

export const Home = () => {
  return <HomeView />;
};

const HomeView = () => {
  return (
    <div className="dark:text-white">
      <Info />
      {/* 소개글 */}
      <Content title="Info.">
        <p>소개글</p>
      </Content>
      <Content title="Career.">
        <p>경력</p>
      </Content>
      <Content title="Skill.">
        <p>경력</p>
      </Content>
      <Content title="Education.">
        <p>경력</p>
      </Content>
      <Content title="Others.">
        <p>경력</p>
      </Content>
    </div>
  );
};
