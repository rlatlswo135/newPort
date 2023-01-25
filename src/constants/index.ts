export type ProfileInfo = {
  type: string;
  value: string;
};

type Profile = {
  [key: string]: ProfileInfo[];
};

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
