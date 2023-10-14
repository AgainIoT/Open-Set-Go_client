import { atom, atomFamily } from "recoil";

// export const issueNameState = atomFamily({
//   key: "issueNameState",
//   default: "",
// });

// export const issueDescState = atomFamily({
//   key: "issueDescState",
//   default: "",
// });
// export const issueTitleState = atomFamily({
//   key: "issueTitleState",
//   default: "",
// });

export const selectedState = atom({
  key: "selectedState",
  default: [],
});
