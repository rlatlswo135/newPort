import React from "react";
import tw from "tailwind-styled-components";

export const Intro = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-sub mb-6 underline pb-2 underline-offset-8 dark:text-white">
        성공보다 성장을 꿈꾸는 FE 개발자 김신재입니다.
      </p>
      <Text>
        팀원들이 쌓은 코드가 모여 서비스가 되기에 <Strong>커뮤니케이션</Strong>
        을 중요시 생각합니다.
      </Text>
      <Text>
        <Strong>문제해결을 사랑합니다</Strong> 한단계 성장한 느낌이 들기
        때문입니다.
      </Text>
      <Text>
        유리공장에서 6년간 일한 경험이있습니다.{" "}
        <Strong>누구보다 뜨겁고 우직하게 성장할 것입니다</Strong>
      </Text>
    </div>
  );
};

const Text = tw.p`
dark:text-gray-300 mb-4
`;

const Strong = tw.span`
border-b-1 border-line font-bold
`;
