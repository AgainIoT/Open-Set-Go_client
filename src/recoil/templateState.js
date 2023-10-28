import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//state for user select _id
export const templateSelectState = atomFamily({
  key: "templateSelectState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const templateListData = atomFamily({
  key: "templateListData",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// state to show  preview about user select from template modal(templateList)
export const templatePreviewState = atomFamily({
  key: "templatePreviewState",
  default: [{}],
  effects_UNSTABLE: [persistAtom],
});

// state to save template + user input
export const templateContent = atomFamily({
  key: "templateContent",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// TemplateList type (basic list or draggable)
export const templateListType = atom({
  key: "listType",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// layout type (review or steps)
export const layoutType = atom({
  key: "layoutType",
  default: "",
});
