import Eyes from '../eyes/eyes.component';
import greetingPng from '../../assets/greeting.png';
import TextEffect from '../text-effect/text-effect.component';
import {
  HeroWrapper,
  Title,
  MyName,
  Role,
  HeroContent,
  HeroImage,
} from './hero.styles.jsx';

const Hero = () => {
  console.log('Hero re/render');

  const defaultText = `As a front-end web developer, I am driven by a keen eye for design and a deep passion for creating captivating user experiences. I excel in bringing websites to life, crafting intuitive interfaces that leave a lasting impact on visitors.`;

  return (
    <HeroWrapper>
      <HeroContent>
        <img src={`${greetingPng}`} />
        <Title>
          <MyName>I'm ishak bensadok</MyName>
          <br />
          <Role> A front-end web developer</Role>
        </Title>

        <TextEffect defaultText={defaultText} />
      </HeroContent>
      <HeroImage>
        <Eyes />
      </HeroImage>
    </HeroWrapper>
  );
};
export default Hero;
