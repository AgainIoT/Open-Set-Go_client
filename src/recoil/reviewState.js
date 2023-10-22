import { atom, atomFamily } from "recoil";

// owner, repoName
export const reviewRepoDataState = atomFamily({
  key: "reviewRepoDataState",
  default: "",
});

export const reivewAlertListState = atom({
  key: "reviewAlertListState",
  default: [],
});

export const reivewReportState = atomFamily({
  key: "reivewReportState",
  default: [],
});
