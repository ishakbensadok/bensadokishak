import Navigation from '../../routes/navigation/navigation.component';
import FixNav from '../fix-nav/fix-nav.component';
import LoadingScreen from '../loading-screen/loading-screen.component';
import Cursor from '../cursor/cursor.component';
import ScrollToTop from '../scroll-to-up/scroll-to-up.component';
const Wrapper = () => {
  return (
    <Cursor>
      <Navigation />
      <FixNav />
      <LoadingScreen />
      <ScrollToTop />
    </Cursor>
  );
};

export default Wrapper;
