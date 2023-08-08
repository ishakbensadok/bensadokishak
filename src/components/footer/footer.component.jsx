import me from '../../assets/me.png';

import SocialMedia from '../socialMedia/social-media.component';
import LocalTime from '../local-time/local-time.component';
import LinkToRoute from '../link-to-route/link-to-route.component';
import {
  FooterWrapper,
  Container,
  Creator,
  Credits,
  FooterContent,
  Title,
} from './footer.styles.jsx';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Container>
          <Title>Who I am!</Title>
          <LinkToRoute to='About' />
        </Container>
        <img src={`${me}`} alt='' />
        <Container>
          <Title>Let's Connect!</Title>
          <LinkToRoute to='Contact' />
        </Container>
      </FooterContent>

      <SocialMedia />
      {/* {[...Array(10)].map((_, index) => {
          return <span className={`circle circle--${index + 1}`}></span>;
        })} */}

      <Credits>
        <span>© 2023</span>
        <LocalTime />
      </Credits>

      <Creator>
        Designed and built by <span className='my-name'>ishak bensadok</span>
      </Creator>
    </FooterWrapper>
  );
};

export default Footer;
