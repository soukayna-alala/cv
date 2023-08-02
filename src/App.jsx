import { Header } from "./components/Header/Header.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import styles from "./App.module.scss";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <div>
          <Profile />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
