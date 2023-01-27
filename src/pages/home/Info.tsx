import React from "react";
import tw from "tailwind-styled-components";
import { PROFILE_INFO } from "@/constants";
import { InfoContent } from "./InfoContent";

export const Info = () => {
  return (
    <>
      {/* 소개멘트 */}
      <TitleWrap>
        <Name>
          김신재
          <SubName> Frontend Developer</SubName>
        </Name>
      </TitleWrap>
      {/* 프로필 */}
      <InfoWrap>
        {/* 이미지 */}
        <ImageWrap>
          {/* <img alt="이미지 없음"  /> */}
          <img
            className="w-full h-full rounded-full"
            alt="err"
            src="https://user-images.githubusercontent.com/81791674/214994908-9ce80989-1db2-4d83-a35c-d40e99cf9df9.jpeg"
          />
        </ImageWrap>
        {/* 컨택트 및 깃허브 + 노션 */}
        <ContentWrap>
          {Object.entries(PROFILE_INFO).map((item) => {
            const [mainTitle, values] = item;
            return (
              <InfoContent
                mainTitle={mainTitle}
                values={values}
                key={`infoContent-${mainTitle}`}
              />
            );
          })}
        </ContentWrap>
      </InfoWrap>
    </>
  );
};

const TitleWrap = tw.div`
flex mb-4
`;
const InfoWrap = tw.div`
flex justify-start pt-6 pb-12 border-b-1 border-line/10  
`;
const ImageWrap = tw.div`
w-56 h-56 rounded-full
`;
const ContentWrap = tw.div`
flex py-4 flex-col ml-12 justify-between  
`;
const Name = tw.p`
text-5xl font-bold
`;
const SubName = tw.span`
text-3xl text-gray-300
`;
