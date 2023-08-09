import mePng from '../../assets/me.png';
import resume from '../../assets/resume.pdf';

import {
  AboutContent,
  AboutWrapper,
  Arrow,
  Description,
  ResumeLink,
  Title,
} from './about.styles.jsx';

const About = () => {
  console.log('About re/render');

  return (
    <AboutWrapper>
      <img src={`${mePng}`} alt='' />

      <AboutContent>
        <Title>About</Title>
        <Description>
          I'm Bensadok Ishak, a passionate individual based in Sidi Bel Abbes,
          Algeria. With a Master's degree in Business Administration and a
          strong educational background, I am well-equipped with the knowledge
          and skills necessary for success. <br />
          <br /> I am particularly enthusiastic about web development and am
          eager to apply my expertise in a real-world setting.
          <br /> In my free time, I enjoy watching anime and exploring different
          storylines, while also staying up-to-date with the latest trends in
          technology. <br /> <br />I look forward to new opportunities and
          collaborations in the exciting world of web development.
        </Description>

        <ResumeLink href={`${resume}`}>
          <Arrow> &darr;</Arrow>
          <span>resume</span>
        </ResumeLink>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
