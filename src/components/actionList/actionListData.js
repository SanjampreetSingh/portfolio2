import ICONS from "../../constants/icons";

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
        link: "https://www.linkedin.com/in/sanjampreetsingh/",
      },
      {
        title: "Twitter",
        key: "twitter",
        icon: ICONS.TWITTER,
        link: "https://twitter.com/sanjampreet_",
      },
      {
        title: "YouTube",
        key: "youtube",
        icon: ICONS.YOUTUBE,
        link: "https://www.youtube.com/@CodeSanjam",
      },
      {
        title: "Instagram",
        key: "instagram",
        icon: ICONS.INSTAGRAM,
        link: "https://www.instagram.com/code_sanjam/",
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
