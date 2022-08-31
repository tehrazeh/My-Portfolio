import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App(props) {
  return (
    <div className="App">
      <Header navBar={props.state.navBar}/>
      <Sidebar sideBar={props.state.sideBar}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
