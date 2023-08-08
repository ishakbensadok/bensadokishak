import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

import About from './routes/about/about.component';
import Projects from './routes/projects/projects.component';
import Contact from './routes/contact/contact.component';
import Wrapper from './components/wrapper/wrapper.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path='projects/*' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
