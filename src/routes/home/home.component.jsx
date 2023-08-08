import Hero from '../../components/hero/hero.component';
import ProjectsPreview from '../../components/projects-preview/projects-preview.component';
import { HomeWrapper } from './home.styles.jsx';
import SectionSeperator from '../../components/section-seperator/section-seperator.component';
import Footer from '../../components/footer/footer.component';
const Home = () => {
  console.log('Home re/render');

  return (
    <HomeWrapper>
      <Hero />
      <SectionSeperator />
      <ProjectsPreview restricted={true} />
      <SectionSeperator />

      <Footer />
    </HomeWrapper>
  );
};

export default Home;
