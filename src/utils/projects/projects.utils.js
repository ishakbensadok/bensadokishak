import imgPre1 from '../../assets/project1Preview.png';
import imgPre2 from '../../assets/project2Preview.png';
import imgPre3 from '../../assets/project3Preview.png';
import imgPre4 from '../../assets/project4Preview.png';
import imgPre5 from '../../assets/project5Preview.png';

import mobPng1 from '../../assets/Leon-Template-One-Phone.png';
import desPng1 from '../../assets/Leon-Template-One.png';

import mobPng1Small from '../../assets/Leon-Template-One-Phone-small.png';
import desPng1Small from '../../assets/Leon-Template-One-small.png';

import mobPng2 from '../../assets/kasper-Template-Two-Phone.png';
import desPng2 from '../../assets/kasper-Template-Twoo.jpg';

import mobPng2Small from '../../assets/kasper-Template-Two-Phone-small.png';
import desPng2Small from '../../assets/kasper-Template-Twoo-small.jpg';

import mobPng3 from '../../assets/Ishak-bensadok-Phone.png';
import desPng3 from '../../assets/Ishak-bensadok.png';

import mobPng3Small from '../../assets/Ishak-bensadok-Phone-small.png';
import desPng3Small from '../../assets/Ishak-bensadok-small.png';

import mobPng4 from '../../assets/TrailFlix-Phone.png';
import desPng4 from '../../assets/TrailFlix.png';

import mobPng4Small from '../../assets/TrailFlix-Phone-small.png';
import desPng4Small from '../../assets/TrailFlix-small.png';

import Icon from '../../components/icon/icon.component';

export const PROJECTS_INFORMATION = [
  {
    id: 1,
    title: 'Leon',
    previewImg: `${imgPre1}`,
    technologies: [<Icon id='html' />, <Icon id='css' />],
    desktopImg: `${desPng1}`,
    mobileImg: `${mobPng1}`,
    desktopImgSmall: `${desPng1Small}`,
    mobileImgSmall: `${mobPng1Small}`,
    year: 2022,
    websiteLink: 'https://ishakbensadok.github.io/Leon-Template/',
    gitHubLink: 'https://github.com/ishakbensadok/Leon-Template',
  },
  {
    id: 2,
    title: 'kasper',
    previewImg: `${imgPre2}`,
    technologies: [<Icon id='html' />, <Icon id='css' />],
    desktopImg: `${desPng2}`,
    mobileImg: `${mobPng2}`,
    desktopImgSmall: `${desPng2Small}`,
    mobileImgSmall: `${mobPng2Small}`,
    year: 2022,
    websiteLink: 'https://ishakbensadok.github.io/kasper-Template/',
    gitHubLink: 'https://github.com/ishakbensadok/kasper-Template',
  },
  {
    id: 3,
    title: 'Template',
    previewImg: `${imgPre3}`,
    technologies: [<Icon id='html' />, <Icon id='css' />],
    desktopImg: `${desPng3}`,
    mobileImg: `${mobPng3}`,
    desktopImgSmall: `${desPng3Small}`,
    mobileImgSmall: `${mobPng3Small}`,
    year: 2022,
    websiteLink: 'https://ishakbensadok.github.io/Template-Three/',
    gitHubLink: 'https://github.com/ishakbensadok/Template-Three',
  },

  {
    id: 4,
    title: 'TrailFlix',
    previewImg: `${imgPre4}`,
    technologies: [
      <Icon id='html' />,
      <Icon id='css' />,
      <Icon id='javascript' />,
    ],
    desktopImg: `${desPng4}`,
    mobileImg: `${mobPng4}`,
    desktopImgSmall: `${desPng4Small}`,
    mobileImgSmall: `${mobPng4Small}`,
    year: 2023,
    websiteLink: 'https://ishakbensadok.github.io/TrailFlix/',
    gitHubLink: 'https://github.com/ishakbensadok/TrailFlix',
  },
  {
    id: 5,
    title: 'Portfolio',
    previewImg: `${imgPre5}`,
    technologies: [
      <Icon id='html' />,
      <Icon id='css' />,
      <Icon id='javascript' />,
      <Icon id='sass' />,
      <Icon id='react' />,
    ],
    desktopImg: '',
    mobileImg: '',
    desktopImgSmall: '',
    mobileImgSmall: '',
    year: 2023,
    websiteLink: 'http://localhost:3000/',
    gitHubLink: 'http://localhost:3000/',
  },
];

export default PROJECTS_INFORMATION;
