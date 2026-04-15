// Dance experiences data for the Experiences > Dance view.
import paradoxLogo from '../assets/extra/paradox.jpg?url';
import msnightWallpaperLogo from '../assets/extra/msnightwallpaper.jpg?url';
import kmdcLogo from '../assets/extra/KMDC.jpg?url';
import elevateLogo from '../assets/extra/elevate.jpg?url';
import dcorpsLogo from '../assets/extra/dcorps.jpg?url';
import bhouseLogo from '../assets/extra/bhouse.jpg?url';

export interface DanceLink {
  label: string;
  url: string;
  type?: string;
}

export interface DanceExperience {
  name: string;
  subtitle: string;
  date: string;
  logo: string;
  description: string;
  links: DanceLink[];
}

export const danceExperiences: DanceExperience[] = [
  {
    name: 'PARADOX',
    subtitle: 'KPOP Dance Crew',
    date: 'Apr 2026 - Present',
    logo: paradoxLogo,
    description: '',
    links: [
      {
        label: 'YouTube',
        type: 'Youtube',
        url: 'https://www.youtube.com/@Paradox_Official',
      },
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/official.paradox/',
      },
    ],
  },
  {
    name: 'DCorps',
    subtitle: 'London Dance Crew',
    date: 'Nov 2025 - Present',
    logo: dcorpsLogo,
    description: '',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/d.corpsdance/?hl=en',
      },
    ],
  },
  {
    name: 'KMDC',
    subtitle: 'KPOP Filming Projects',
    date: 'Jul 2025 - Present',
    logo: kmdcLogo,
    description: '',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/kpopinlondonmin/',
      },
      {
        label: 'YouTube',
        type: 'Youtube',
        url: 'https://www.youtube.com/@kpopinlondonmin4439',
      },
    ],
  },
  {
    name: 'Astris',
    subtitle: 'KPOP dance Crew',
    date: 'May 2026 - Present',
    logo: '',
    description: '',
    links: [],
  },
  {
    name: 'Bristol MSNight',
    subtitle: 'Student Production',
    date: 'Jan 2023 - May 2025',
    logo: msnightWallpaperLogo,
    description: '',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/bristolmsnight',
      },
    ],
  },
  {
    name: 'Legends of Lions',
    subtitle: 'Harrow Dance Team',
    date: 'Aug 2019 - May 2021',
    logo: '',
    description: '',
    links: [],
  },
  {
    name: 'B House Studio',
    subtitle: 'Bangkok Dance Crew',
    date: 'May 2020 - Aug 2021',
    logo: bhouseLogo,
    description: '',
    links: [
      {
        label: 'YouTube',
        type: 'Youtube',
        url: 'https://www.youtube.com/channel/UCN2CPH7I9HkF1ec3E24k41w',
      },
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/bhousestudio/?hl=en',
      },
    ],
  },
  {
    name: 'Elevate Studio',
    subtitle: 'Bristol KPOP Team',
    date: 'Oct 2022 - Mar 2023',
    logo: elevateLogo,
    description: '',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/uobelevatestudio/',
      },
    ],
  },
];
