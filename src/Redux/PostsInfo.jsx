import React from "react";


const CHAPLIN_CONTENT = 'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2019/07/23/2019-07-23-Trailblazing-Tokyo-looking-ahead-featured.jpg?interpolation=lanczos-none&resize=3840:1600';
const WALT_CONTENT = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png';
const LANA_CONTENT = 'https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg';

const CHAPLIN_PHOTO = 'https://images-na.ssl-images-amazon.com/images/I/719LAcj7oUL.png';
const WALT_PHOTO = 'https://myhero.com/images/guest/g225815/hero63846/g225815_u73428_031009Walt_Hero_feature.jpg';
const LANA_PHOTO = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3MTAwNTIzNDc5MTE1MDY1/lana-del-rey-attends-the-60th-annual-grammy-awards-at-madison-square-garden-on-january-28-2018-in-new-york-city-photo-by-dimitrios-kambouris_getty-images-for-naras-square.jpg';

const postsInfo = [
  { 
    author: "Charlie Chaplin",
    ava: CHAPLIN_PHOTO,
    nickname: "@charlie_1889",
    text: "A life without travelling is a life not lived.",
    photo: CHAPLIN_CONTENT,
    date: "June 27",
  },
  {
    author: "Walt Disney",
    ava: WALT_PHOTO,
    nickname: "@cartoonist",
    text: "If you can imagine it you can achieve it.",
    photo: WALT_CONTENT,
    date: "June 29",
  },
  {
    author: "Lana del Rey",
    ava: LANA_PHOTO,
    nickname: "@lana-banana",
    text: `I got my red dress on tonight
    Dancin' in the dark, in the pale moonlight
    Done my hair up real big, beauty queen style
    High heels off, I'm feelin' alive`,
    photo: LANA_CONTENT,
    date: "August 23",
  }
]

export default postsInfo;