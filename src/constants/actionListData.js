import pagesData from "./pagesData";
import socialLinkData from "./socialLinkData";

const actionListData = [
  {
    title: "Pages",
    key: "pages",
    children: pagesData,
  },
  {
    title: "Social",
    key: "social",
    children: socialLinkData,
  },
  {
    title: "Theme",
    key: "theme",
    children: [
      {
        title: "Change theme",
        key: "change-theme",
      },
    ],
  },
];

export default actionListData;
