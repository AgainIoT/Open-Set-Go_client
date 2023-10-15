import { atom, atomFamily, selector } from "recoil";

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

export const selectedTitle = atom({
  key: "selectedTitle",
  default: "",
});

export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
});
