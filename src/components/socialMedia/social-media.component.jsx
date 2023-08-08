import Icon from '../icon/icon.component';
import { SocialMediaWrapper, SocialMediaLink } from './social-media.styles.jsx';
const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <SocialMediaLink target='_blank' href='https://twitter.com/bensadokishak'>
        <Icon id='twitter' />
      </SocialMediaLink>
      <SocialMediaLink
        target='_blank'
        href='https://www.linkedin.com/in/ishak-bensadok-642365173/'
      >
        <Icon id='linkedin' />
      </SocialMediaLink>
      <SocialMediaLink
        target='_blank'
        href='https://www.instagram.com/techjourneyishak/'
      >
        <Icon id='instagram' />
      </SocialMediaLink>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
