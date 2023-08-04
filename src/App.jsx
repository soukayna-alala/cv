import { Header } from "./components/Header/Header.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import styles from "./App.module.scss";
import { Skills } from "./components/Skills/Skills";
import { CodeSamples } from "./components/CodeSamples/CodeSamples";
import { FindMeOnline } from "./components/FindMeOnline/FindMeOnline";
import { Interests } from "./components/Interests/Interests";
import { Languages } from "./components/Languages/Languages";

function App() {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <div>
          <Profile />
          <Skills />
        </div>
        <div>
          <CodeSamples />
          <FindMeOnline />
        </div>
      </div>
      <Languages />
      <Interests />
    </>
  );
}

export default App;
