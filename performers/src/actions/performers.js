import { FETCH_PERFORMERS } from "./types";

const performers = [
  {
    abbrev: "SJ",
    category: "nhl",
    category_group: "sport",
    contrast_color: "",
    display_type: "performer_vs_performer",
    id: "5270135d3bf376613a000002",
    hero_image_url: "https://images.gametime.co/nhlsjs/hero@4x.jpg",
    medium_name: "SJ Sharks",
    name: "San Jose Sharks",
    primary_color: "1C6EABFF",
    short_name: "Sharks",
    slug: "nhlsjs"
  },
  {
    abbrev: "GSW",
    category: "nba",
    category_group: "sport",
    contrast_color: "FFC33CFF",
    display_type: "performer_vs_performer",
    id: "5270135d3bf376613a000003",
    hero_image_url: "https://images.gametime.co/nbagsw/hero@4x.jpg",
    medium_name: "GS Warriors",
    name: "Golden State Warriors",
    primary_color: "04529CFF",
    short_name: "Warriors",
    slug: "nbagsw"
  },
  {
    abbrev: "LA",
    category: "nhl",
    category_group: "sport",
    contrast_color: "AFB7BAFF",
    display_type: "performer_vs_performer",
    id: "52af58b43bf3763ea7000003",
    hero_image_url: "https://images.gametime.co/nhllak/hero@4x.jpg",
    medium_name: "LA Kings",
    name: "Los Angeles Kings",
    primary_color: "6E6E6EFF",
    short_name: "Kings",
    slug: "nhllak"
  },
  {
    abbrev: "LAC",
    category: "nba",
    category_group: "sport",
    contrast_color: "",
    display_type: "performer_vs_performer",
    id: "52af58b43bf3763ea7000004",
    hero_image_url: "https://images.gametime.co/nbalac/hero@4x.jpg",
    medium_name: "LA Clippers",
    name: "LA Clippers",
    primary_color: "EE2843FF",
    short_name: "Clippers",
    slug: "nbalac"
  }
];
export const fetchPerformers = () => {
  return (dispatch, getState) => {
    // call to api
    dispatch({
      type: FETCH_PERFORMERS,
      data: performers
    });
  };
};
