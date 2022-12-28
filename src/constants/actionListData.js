import ICONS from "./icons";
import { resumeLink } from "./links";
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
  {
    title: "Resume",
    key: "resume",
    children: [
      {
        title: "Check Resume",
        key: "check-resume",
        icon: ICONS.RESUME,
        link: resumeLink,
      },
    ],
  },
];

export default actionListData;
