import React from "react";
import { Project } from "@/types";
import tw from "tailwind-styled-components";

type ContentProps = Project;

export const Content = ({
  title,
  description,
  skils,
  date,
  image,
  repo,
}: ContentProps) => {
  return (
    <Container>
      {/* 프로젝트 이미지 */}
      <ImageWrap>
        <img src={image} alt="오류" className="w-full h-full" />
      </ImageWrap>
      {/* 설명 */}
      <ContentWrap>
        <DescriptionWrap>
          <div className="flex items-center">
            <Title>{title}</Title>
            <Date>{`(${date})`}</Date>
          </div>
          <Description>{description}</Description>
        </DescriptionWrap>
        {/* 스킬 */}
        <DetailWrap>
          <div className="mt-6">
            <DetailTitle>Skill</DetailTitle>
            <div className="flex pt-2">
              {Object.entries(skils).map((item) => {
                const [type, tools] = item;
                return (
                  <div className="mr-10">
                    <Type>{type}</Type>
                    <span>{tools.join(", ")}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8">
            <DetailTitle>Repository</DetailTitle>
            <Repo href={repo} target="_blank">
              링크
            </Repo>
          </div>
        </DetailWrap>
      </ContentWrap>
    </Container>
  );
};

const Container = tw.div`
flex w-full px-24 pt-20
`;
const DescriptionWrap = tw.div`
whitespace-pre-wrap
`;
const Date = tw.span`
ml-4 font-bold text-xl text-sub
`;
const ImageWrap = tw.div`
w-96 h-96 p-4
`;
const ContentWrap = tw.div`
p-8
`;
const DetailWrap = tw.div`
flex flex-col items-start mt-4
`;
const Description = tw.p``;
const Title = tw.p`
text-3xl font-bold mb-2 border-b-1 border-line
`;
const DetailTitle = tw.span`
text-header text-xl font-bold  
`;
const Type = tw.p`
text-gray-400 font-bold
`;
const Repo = tw.a`
flex pt-2 hover:text-header
`;
