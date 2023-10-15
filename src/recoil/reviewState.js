import { atomFamily } from "recoil";

// owner, repoName
export const reviewRepoDataState = atomFamily({
  key: "reviewRepoDataState",
  default: "",
});
