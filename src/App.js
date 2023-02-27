import Header from './components/header/header';
import styles from'./App.module.css';
import Nav from './components/nav/nav';
import '@csstools/normalize.css';
import Profile from './components/profile/profile';



function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
      <Header></Header>
      </div>
      <Nav></Nav>
      <div className={styles.content}>
      <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
