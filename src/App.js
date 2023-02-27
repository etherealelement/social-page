import Header from './components/header/header';
import './App.css';
import Nav from './components/nav/nav';
import '@csstools/normalize.css';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <div className="header">
      <Header></Header>
      </div>
      <div className="nav">
      <Nav></Nav>
      </div>
      <div className="content">
      <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
