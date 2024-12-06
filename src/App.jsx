import { Header } from "./components/Header/Header.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import styles from "./App.module.scss";
import { Skills } from "./components/Skills/Skills";
import { FindMeOnline } from "./components/FindMeOnline/FindMeOnline";
import { Interests } from "./components/Interests/Interests";
import { Languages } from "./components/Languages/Languages";
import { Courses } from "./components/Courses/Courses";
import { Education } from "./components/Education/Education";

function App() {
  const { gridContainer } = styles;
  return (
    <>
      <Header />
      <div className={gridContainer}>
        <div>
          <Profile />
        </div>
        <div>
          <FindMeOnline />
        </div>
      </div>
      <Skills />
      <Courses />
      <Languages />
      <Education />
      <Interests />
    </>
  );
}

export default App;
