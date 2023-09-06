import { atom, atomFamily } from "recoil";

//state for user select
export const templateSelectState = atomFamily({
  key: "templateSelectState",
  default: "",
});

// state to show  preview about user select from template modal(templateList)
export const templatePreviewState = atomFamily({
  key: "templatePreviewState",
  default: [],
});

// state to save template + user input
export const templateContent = atomFamily({
  key: "templateContent",
  default: "",
});

// export const templateToModal = atom({
//   key: "templateContent",
//   default: "",
// });
