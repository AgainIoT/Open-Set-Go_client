import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// owner, repoName
export const reviewRepoDataState = atomFamily({
  key: "reviewRepoDataState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// null value list
export const reivewAlertListState = atom({
  key: "reviewAlertListState",
  default: [],
});

// report data about checked(true item), none(false item), etc.
export const reivewReportState = atomFamily({
  key: "reivewReportState",
  default: [],
});
