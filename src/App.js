
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MenuBar from './components/MenuBar/MenuBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
      <Header/>
      <MenuBar/>
      <div className="data-container">
      <SideBar/>
      <Main/>
      </div>
      
    </div>
  );
}

export default App;
