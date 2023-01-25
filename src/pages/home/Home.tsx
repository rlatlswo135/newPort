import React, { useMemo } from "react";
import tw from "tailwind-styled-components";
import { Career } from "./Career";
import { Content } from "./Content";
import { Info } from "./Info";
import { Intro } from "./Intro";
import { Skill } from "./Skill";

export const Home = () => {
  const homeContent = useMemo(
    () => [
      { title: "Intro", render: <Intro /> },
      { title: "Career", render: <Career /> },
      { title: "Skill", render: <Skill /> },
    ],
    []
  );

  return (
    <Container className="dark:text-white">
      <Info />
      {/* 소개글 */}
      {homeContent.map((content) => {
        const { title, render } = content;
        return (
          <Content title={title} key={`homeContent-${title}`}>
            {render}
          </Content>
        );
      })}
    </Container>
  );
};

const Container = tw.div`
px-72 py-32 h-full
dark:bg-dark dark:text-white
`;
