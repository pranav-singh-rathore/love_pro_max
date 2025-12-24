import { blackImg, blueImg, highlightFirstVideo, highlightFourthVideo, highlightSecondVideo, highlightThirdVideo, whiteImg, yellowImg } from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The Kindness Engine.",
      "Unmatched Empathy.",
      "10/10, No Notes.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Resilience.", "So Strong.", "So Gentle.", "So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Visionary.",
      "Purr-fect Harmony.",
      "Approved By Cat.",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["All Day Happiness.", "Power That Lasts For Lifetime."],
    video: highlightFourthVideo,
    videoDuration: 5,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [ "I wish you a merry christmas!" ];