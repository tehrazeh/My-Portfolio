import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
