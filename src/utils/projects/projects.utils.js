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

import mobPng5 from '../../assets/portfolio-phone.png';
import desPng5 from '../../assets/portfolio.png';

import mobPng5Small from '../../assets/portfolio-phone-small.png';
import desPng5Small from '../../assets/portfolio-small.png';

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
    details:
      'This was the first website I made on my own, when I was learning HTML and CSS. It was a simple template, but it really helped me get better at using HTML and CSS.',
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
    details:
      'This was the second website I created by myself. While this template posed a slight challenge, it played a significant role in improving my HTML and CSS skills.',
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
    details:
      'This was my third website that I built on my own. This template taught me a lot and showed me how much I could do with just HTML and CSS. I had a great time creating it.',
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
    details:
      'This became my fourth self-built website, designed by me. It was also my first time incorporating JavaScript. I constructed this site to become comfortable with utilizing third-party APIs, and the journey of building it was truly rewarding',
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
    desktopImg: `${desPng5}`,
    mobileImg: `${mobPng5}`,
    desktopImgSmall: `${desPng5Small}`,
    mobileImgSmall: `${mobPng5Small}`,
    year: 2023,
    websiteLink: 'http://localhost:3000/',
    gitHubLink: 'http://localhost:3000/',
    details: `This marks my fifth independently crafted and personally designed website. It's also my inaugural project utilizing React.js. I was truly astonished by the immense capabilities that React.js offers, allowing for the creation of powerful functionalities.`,
  },
];

export default PROJECTS_INFORMATION;
