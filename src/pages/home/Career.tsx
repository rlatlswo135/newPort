import React from "react";
import tw from "tailwind-styled-components";
import { CAREER_INFO } from "@/constants";

export const Career = () => {
  if (!CAREER_INFO.length) return <div>Error</div>;

  return (
    <>
      {CAREER_INFO.map((item) => {
        const { company, date, work } = item;
        return (
          <Container key={`company-${company}`}>
            <CompanyWrap>
              <Company>{company}</Company>
              <Date>{date}</Date>
            </CompanyWrap>
            <WorkWrap>
              <WorkTitle>{work.title}</WorkTitle>
              {work.list.map((item) => {
                const { des, subDes, link } = item;
                return (
                  <DesWrap key={`des-${des}`}>
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
                        <SubDes key={`subDes-${item}`} des={item}>
                          {item.replace("!!", "")}
                        </SubDes>
                      ))}
                  </DesWrap>
                );
              })}
            </WorkWrap>
          </Container>
        );
      })}
    </>
  );
};

const Container = tw.div`
flex justify-between lg:justify-start
`;
const CompanyWrap = tw.div`
lg:mr-20
`;
const WorkWrap = tw.div``;
const Company = tw.p`
text-xl font-bold
`;
const Date = tw.span`
text-sm text-sub font-bold
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
