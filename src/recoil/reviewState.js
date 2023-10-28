import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// owner, repoName
export const reviewRepoDataState = atomFamily({
  key: "reviewRepoDataState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const reivewAlertListState = atom({
  key: "reviewAlertListState",
  default: [],
});

export const reivewReportState = atomFamily({
  key: "reivewReportState",
  default: [],
});
