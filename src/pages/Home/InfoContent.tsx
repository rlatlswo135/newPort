import tw from "tailwind-styled-components";
import React from "react";
import { ProfileInfo } from "@/constants";

type InfoContentType = {
  mainTitle: string;
  values: ProfileInfo[];
};
export const InfoContent = ({ mainTitle, values }: InfoContentType) => {
  return (
    <Container>
      <Title>{mainTitle}</Title>
      {values.map((item) => {
        const { type, value } = item;
        return (
          <Content className="flex">
            <Type>{type}</Type>
            <Link
              href={type === "Email" ? `mailto:${value}` : `https://${value}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.split("/")[0]}
            </Link>
          </Content>
        );
      })}
    </Container>
  );
};

const Container = tw.p``;
const Title = tw.p`
text-2xl mb-2 text-header font-bold   
`;
const Content = tw.p`
flex
`;
const Type = tw.p``;
const Link = tw.a`
ml-2 text-gray-400    
`;
