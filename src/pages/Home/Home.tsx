import React from "react";
import tw from "tailwind-styled-components";
import { Career } from "./Career";
import { Content } from "./Content";
import { Info } from "./Info";

export const Home = () => {
  return (
    <Container className="dark:text-white">
      <Info />
      {/* 소개글 */}
      <Content title="Info.">
        <p>소개글</p>
      </Content>
      <Content title="Career.">
        <Career />
      </Content>
      <Content title="Skill.">
        <p>스킬</p>
      </Content>
      <Content title="Education.">
        <p>경력</p>
      </Content>
      <Content title="Others.">
        <p>경력</p>
      </Content>
    </Container>
  );
};

const Container = tw.div`
px-72 pt-32 pb-24
dark:bg-dark dark:text-white
`;
