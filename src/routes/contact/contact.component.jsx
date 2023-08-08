import Section from '../../components/section/section.component';

// import { ReactComponent as EmailSvg } from '../../assets/email.svg';

import SocialMedia from '../../components/socialMedia/social-media.component';
import Icon from '../../components/icon/icon.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import { ContactWrapper, Content, Subtitle, Title } from './contact.styles.jsx';

const Contact = () => {
  console.log('Contact re/render');

  return (
    <ContactWrapper>
      <Content>
        <Title>Contact</Title>
        <Subtitle>Feel free to reach out to me at :</Subtitle>
        <a href='mailto:bensadokishak@gmail.com'>
          <Icon id='email' />
          bensadokishak@gmail.com
          <span>&#8599;</span>
        </a>
        <Subtitle>or connect with me on :</Subtitle>
        <SocialMedia />
      </Content>

      <ContactForm />
    </ContactWrapper>
  );
};

export default Contact;
