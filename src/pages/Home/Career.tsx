import React from "react";
import tw from "tailwind-styled-components";
import { CAREER_INFO } from "@/constants";

export const Career = () => {
  return (
    <Container>
      {CAREER_INFO.map((item) => {
        const { company, date, work } = item;
        return (
          <>
            <div>
              <Company>{company}</Company>
              <Date>{date}</Date>
            </div>
            <div>
              <WorkTitle>{work.title}</WorkTitle>
              {work.list.map((item) => {
                const { des, subDes, link } = item;
                return (
                  <DesWrap>
                    <Des>
                      {`- ${des} `}
                      {link && (
                        <DesLink href={link} target="_blank">
                          - 링크
                        </DesLink>
                      )}
                    </Des>
                    {subDes &&
                      subDes.map((item) => (
                        <SubDes des={item}>{item.replace("!!", "")}</SubDes>
                      ))}
                  </DesWrap>
                );
              })}
            </div>
          </>
        );
      })}
    </Container>
  );
};

const Container = tw.div`
flex justify-between pr-20
`;
const Company = tw.p`
text-xl font-bold
`;
const Date = tw.span`
text-sm text-sub
`;
const WorkTitle = tw.p`
font-bold text-lg
`;
const DesWrap = tw.div`
flex flex-col items-start
`;
const Des = tw.p`
mb-1 mt-4
`;
const DesLink = tw.a`
text-sm text-sub hover:text-header
`;
const SubDes = tw.p<{ des: string }>`
${({ des }) => (des.includes("!!") ? "border-b-2" : "")}
ml-4 mt-1 text-sm text-sub flex
`;
