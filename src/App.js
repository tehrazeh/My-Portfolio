import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Content/Main/Main';
import Contact from './Components/Content/Contact/Contact';
import Diploma from './Components/Content/Diploma/Diploma';
import Projects from './Components/Content/Projects/Projects';
import Resume from './Components/Content/Resume/Resume';
import { Route, Routes } from 'react-router-dom';
function App(props) {
  return (
    <div className="App">
      <HeaderContainer />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/diploma' element={<Diploma />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
