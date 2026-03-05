import daftPunkCover from "../assets/daft_punk_cover.jpg";
import kendrickCover from "../assets/kendrick_cover.jpg";
import mjCover from "../assets/michael_jackson_cover.jpg";

export const songs = [
  {
    id: 1,
    title: 'Fragments of Time (feat. Todd Edwards)',
    artist: 'Daft Punk, Todd Edwards',
    cover: daftPunkCover,
    explicit: false,
    saved: true,
    bgColor: '#59627A',
    bannerText: 'Live event near you',
    bannerAction: 'See all',
  },
  {
    id: 2,
    title: 'King Kunta',
    artist: 'Kendrick Lamar',
    cover: kendrickCover,
    explicit: true,
    saved: true,
    bgColor: '#212226',
    bannerText: 'About the artist',
    bannerAction: null,
  },
  {
    id: 3,
    title: 'Dangerous',
    artist: 'Michael Jackson',
    cover: mjCover,
    explicit: false,
    saved: false,
    bgColor: '#811f22',
    bannerText: 'About the artist',
    bannerAction: null,
  },
];