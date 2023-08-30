import { atom, atomFamily, selector } from "recoil";

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

// export const repoDataState = atom({
//   key: "repoData",
//   default: [],
// });

export const repoDataAtomFamily = atomFamily({
  key: "repoDataAtomFamily",
  default: [],
});

// export const repoDataSelector = selector({
//   key: "repoDataSelector",
//   get: ({ get }) => {
//     const data = get(repoDataState);
//     return [
//       data.filter((it) => it.type === "Framework"),
//       data.filter((it) => it.type === "Language"),
//       data.filter((it) => it.type === "Other"),
//     ];
//   },
// });
