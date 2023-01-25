import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { PROJECT_INFO } from "@/constants";
import { Content } from "./Content";

export const Project = () => {
  const [page, setPage] = useState<number>(0);

  const { repo, title, description, skils, date, image } = PROJECT_INFO[page];

  return (
    <Container>
      <Title>Project</Title>
      <Content
        title={title}
        description={description}
        skils={skils}
        date={date}
        image={image}
        repo={repo}
      />
      <PageWrap>
        {PROJECT_INFO.map((item, idx) => (
          <Page page={page} idx={idx} onClick={() => setPage(idx)}>
            {idx + 1}
          </Page>
        ))}
      </PageWrap>
    </Container>
  );
};

const Container = tw.div`
flex flex-col items-center pt-44 pb-24 h-[95.6vh]
dark:bg-dark dark:text-white
`;

const Title = tw.p`
pb-6 text-4xl font-bold border-b-1 border-line mb-24
`;

const PageWrap = tw.footer`
flex mt-12  
`;
const Page = tw.button<{ idx: number; page: number }>`
${({ page, idx }) =>
  page === idx
    ? "bg-header/70 dark:bg-gray-300/70"
    : "bg-header/30 dark:bg-gray-600"}
w-8 h-8 flex justify-center items-center ml-4 rounded-full
`;
