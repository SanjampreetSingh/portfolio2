import ICONS from "./icons";
import { instagramLink, linkedinLink, twitterLink, youtubeLink } from "./links";

const actionListData = [
  {
    title: "Pages",
    key: "pages",
    children: [
      {
        title: "Home",
        key: "home",
        icon: "home",
        link: "/",
      },
    ],
  },
  {
    title: "Social",
    key: "social",
    children: [
      {
        title: "LinkedIn",
        key: "linkedin",
        icon: ICONS.LINKEDIN,
        link: linkedinLink,
      },
      {
        title: "Twitter",
        key: "twitter",
        icon: ICONS.TWITTER,
        link: twitterLink,
      },
      {
        title: "YouTube",
        key: "youtube",
        icon: ICONS.YOUTUBE,
        link: youtubeLink,
      },
      {
        title: "Instagram",
        key: "instagram",
        icon: ICONS.INSTAGRAM,
        link: instagramLink,
      },
    ],
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
