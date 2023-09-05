import { atom, atomFamily, selector, selectorFamily } from "recoil";

// lang, framework, repoName, desc
export const repoDataAtomFamily = atomFamily({
  key: "repoDataAtomFamily",
  default: "",
});

// at gitignore modal
export const selectGitignoreData = atom({
  key: "selectGitignoreData",
  default: [],
});

// for show selected value about gitignore (lang, framework, other... )
export const showAllGitignoreState = selector({
  key: "showAllGitignoreState",
  get: ({ get }) => {
    const fixedData1 = get(repoDataAtomFamily("lang"));
    const fixedData2 = get(repoDataAtomFamily("framework"));
    const other = get(selectGitignoreData);
    console.log("asdfasdf", other);
    const data = [fixedData1, fixedData2, [...other]];
    const flattenedData = data.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
      return result;
    }, []);
    console.log("datadata", flattenedData);
    return flattenedData;
  },
});

// export const optionItemSelector = selectorFamily({
//   key: "optionItemSelector",
//   get:
//     (parm) =>
//     ({ get }) => {
//       console.log(parm);
//       if (parm === "Language") {
//         const select = get(repoDataAtomFamily("Framework"));
//         console.log("select1", select);

//         if (select) {
//           const option = Object.keys(languageFrameworks)
//             .filter((key) => {
//               return languageFrameworks[key].includes(select);
//             })
//             .map((it) => {
//               console.log("this", it);
//               return it;
//             }, []);

//           console.log("isSelect1", option);
//           return option;
//         } else {
//           return Object.keys(languageFrameworks);
//         }
//       } else {
//         const select = get(repoDataAtomFamily("Language"));
//         console.log("select2", select);

//         if (select) {
//           console.log("isSelect2", select);

//           const option = languageFrameworks[select];
//           return option;
//         } else {
//           console.log("notSelect", select);

//           const getOption = Object.values(languageFrameworks);
//           const flattenedValues = getOption.reduce(
//             (accumulator, currentValue) => {
//               // console.log("acc", accumulator);
//               // console.log("curr", currentValue);
//               return accumulator.concat(currentValue);
//             },
//             [],
//           );
//           return flattenedValues;
//         }
//       }
//     },
//   set:
//     (parm) =>
//     ({ set }, newValue) => {
//       console.log("setvalue", newValue);
//       set(repoDataAtomFamily(parm), newValue);
//       // if(parm==="Language"){
//       //   const option = languageFrameworks[newValue];
//       //   set(showOptionState("Framework"),option);
//       // }else{
//       //   cosnt option =
//       // }
//     },
// });
