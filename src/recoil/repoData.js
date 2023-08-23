import { atom } from "recoil";

export const selectFrameworkData = atom({
  key: "selectFrameworkData",
  default: [],
});

export const selectLanguageData = atom({
  key: "selectLanguageData",
  default: [],
});

export const selectGitignoreData = atom({
  key: "selectGitignoreData",
  default: [],
});
