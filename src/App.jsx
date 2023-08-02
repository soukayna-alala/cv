import { Header } from "./components/Header/Header.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <div>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
