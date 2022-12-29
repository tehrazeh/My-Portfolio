import './App.css';
import Main from './Components/Content/Main/Main';
import Contact from './Components/Content/Contact/Contact';
import Diploma from './Components/Content/Diploma/Diploma';
import Projects from './Components/Content/Projects/Projects';
import Resume from './Components/Content/Resume/Resume';
import { Route, Routes } from 'react-router-dom';
import ImageSlider from './Components/Content/Projects/ImageSlider/ImageSlider';
import NotFound from './Components/NotFound/NotFound';
import NotDeployed from './Components/NotFound/NotDeployed';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
              <Route path='diploma' element={<Diploma />} />
              <Route path='projects' element={<Projects />} />
              <Route path='contact' element={<Contact />} />
              <Route path='resume' element={<Resume />} />
              <Route path='projects/:projectId/screenshots' element={<ImageSlider />} />
              <Route path='notdeployed' element={<NotDeployed />} />
              <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
