import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// lang, framework, repoName, desc
export const repoDataAtomFamily = atomFamily({
  key: "repoDataAtomFamily",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// at gitignore modal
export const selectGitignoreData = atom({
  key: "selectGitignoreData",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// for show selected value about gitignore (lang, framework, other... )
export const showAllGitignoreState = selector({
  key: "showAllGitignoreState",
  get: ({ get }) => {
    const fixedData1 = get(repoDataAtomFamily("lang"));
    const fixedData2 = get(repoDataAtomFamily("framework"));
    const other = get(selectGitignoreData);
    const data = [fixedData1, fixedData2, [...other]];
    const flattenedData = data.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
      return result;
    }, []);
    return flattenedData;
  },
  effects_UNSTABLE: [persistAtom],
});
