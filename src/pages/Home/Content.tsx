import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

type ContentProps = {
  title: string;
  children: ReactNode;
};
export const Content = ({ title, children }: ContentProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = tw.div`
mt-4
`;
const Title = tw.p`
mb-8 font-bold text-2xl py-6 border-b-1 border-line text-header
`;
