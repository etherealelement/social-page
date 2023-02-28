import Header from "./components/header/header";
import styles from "./App.module.css";
import Nav from "./components/nav/nav";
import "@csstools/normalize.css";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.header}>
          <Header></Header>
        </div>
        <Nav></Nav>
        <div className={styles.content}>
          <Routes>
          <Route path='/dialogs' element={<Dialogs></Dialogs>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/music' element={<Music/>}></Route>
          <Route path='/settings' element={<Settings></Settings>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
