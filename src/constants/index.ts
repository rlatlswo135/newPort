import { Career, Profile, Project, SkillIcons, SkillInfo } from "@/types";

// 프로필정보
export const PROFILE_INFO: Profile = {
  Contact: [{ type: "Email:", value: "rlatlswo13@gmail.com" }],
  More: [
    { type: "GitHub:", value: "github.com/rlatlswo135" },
    {
      type: "Note:",
      value:
        "carnelian-arithmetic-d71.notion.site/e2e0ffe18cdb45398b93be6e007c7802",
    },
  ],
};

// 프로젝트 정보
export const PROJECT_INFO: Project[] = [
  {
    title: "Toy Chat",
    description: "Nextron + Firebase로 만든 간단한 채팅App",
    date: "22.01.10 ~ 22.01.20",
    skils: {
      Lang: ["TypeScript", "JavaScript"],
      tools: ["Next.js", "Electron", "React", "Firebase"],
    },
    image:
      "https://user-images.githubusercontent.com/81791674/212958365-00d87ddb-0457-4028-828c-17b1d557d327.png",
    repo: "https://github.com/rlatlswo135/toyChat",
  },
  {
    title: "먹고 죽으면 그만이야",
    description: "Vanila Javascript로 만든 웹게임",
    date: "22.01.01 ~ 22.04.04",
    skils: {
      Lang: ["Javascript"],
    },
    image:
      "https://user-images.githubusercontent.com/81791674/214560303-83396ebc-35ff-43d7-9d6f-6490f9fa9146.png",
    repo: "https://github.com/rlatlswo135/dino",
    service: "https://rlatlswo135.github.io/dino/",
  },
];

// 경력 정보
export const CAREER_INFO: Career[] = [
  {
    company: "온피아",
    date: "2022.06 ~ 2023.01",
    work: {
      title: "신규 프로젝트 Synaptory 개발 및 유지보수",
      list: [
        {
          des: "설정 -> 챗봇 시나리오 개발 (100%)",
          subDes: [
            "시나리오 목록 및 CRUD",
            "시나리오 미리보기",
            "!!Drag-Drop -> 라이브러리 미지원 drag-drop placeHolder기능 구현",
          ],
        },
        {
          des: "회원가입 페이지 (100%)",
          link: "https://register.synaptory.com/",
        },
        {
          des: "패스워드 분실 페이지 (100%)",
          link: "https://find.synaptory.com/",
        },
        {
          des: "E2E테스트 Python Selenium -> JavaScript Playwright 리팩토링",
        },
      ],
    },
  },
];

// 기술 정보
export const SKILL_INFO: SkillInfo[] = [
  { type: "Language", content: ["JavaScript", "TypeScript"] },
  { type: "Libs", content: ["React", "Redux", "Redux-Saga"] },
  { type: "Test", content: ["PlayWright"] },
];

const DEFAULT_ICON =
  "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001196/noticon/aziehs8hf3w3kwinelzf.png";

// 아이콘 정보
export const SKILL_ICONS: SkillIcons = {
  TypeScript:
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png",
  JavaScript:
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png",
  Redux:
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919941/noticon/bwij1af50rjj0fiyjtci.png",
  "Redux-Saga":
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067441/noticon/nusn2zkdp60e7ee90wdi.png",
  React:
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png",
  Firebase:
    "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png",
  PlayWright: DEFAULT_ICON,
};
