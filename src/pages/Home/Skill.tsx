import React, { useMemo } from "react";
import tw from "tailwind-styled-components";
import { SKILL_ICONS, SKILL_INFO } from "@/constants";

export const Skill = () => {
  return (
    <Container>
      {SKILL_INFO.map((item) => {
        const { type, content } = item;
        return (
          <SkillWrap key={`skills-${type}`}>
            <Type>{type}</Type>
            {content.map((item) => (
              <ContentWrap key={`skill-${item}`}>
                <ImgWrap>
                  <Icon src={SKILL_ICONS[item]} alt="없음" />
                </ImgWrap>
                <Name>{item}</Name>
              </ContentWrap>
            ))}
          </SkillWrap>
        );
      })}
    </Container>
  );
};

const Container = tw.div`
flex justify-between lg:justify-start
`;
const SkillWrap = tw.div`
lg:mr-32
`;
const Type = tw.p`
text-xl font-bold mb-2  
`;

const ContentWrap = tw.div`
flex items-center mb-2  
`;
const ImgWrap = tw.p`
w-5 h-5  
`;
const Icon = tw.img`
w-full h-full
`;
const Name = tw.p`
text-m text-sub ml-2 font-semibold
`;
