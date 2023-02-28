import Header from './components/header/header';
import styles from'./App.module.css';
import Nav from './components/nav/nav';
import '@csstools/normalize.css';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';



function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
      <Header></Header>
      </div>
      <Nav></Nav>
      <div className={styles.content}>
      {/* <Profile></Profile> */}
      <Dialogs></Dialogs>
      </div>
    </div>
  );
}

export default App;
