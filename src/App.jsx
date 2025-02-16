import { Header } from "./components/Header/Header.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import styles from "./App.module.scss";
import { Skills } from "./components/Skills/Skills";
import { FindMeOnline } from "./components/FindMeOnline/FindMeOnline";
import { Interests } from "./components/Interests/Interests";
import { Languages } from "./components/Languages/Languages";
import { Courses } from "./components/Courses/Courses";
import { Education } from "./components/Education/Education";
import { IS_DEV_CV } from "./constants";
import { CustomerCourses } from "./components/customerCourses/CustomerCourses";
import { CustomerSkills } from "./components/customerSkills/CustomerSkills";
import { CustomerProfile } from "./components/customerProfile/CustomerProfile";

function App() {
  const { gridContainer } = styles;
  return (
    <>
      <Header />
      <div className={IS_DEV_CV ? gridContainer : null}>
        <div>{IS_DEV_CV ? <Profile /> : <CustomerProfile />}</div>
        <div>{IS_DEV_CV ? <FindMeOnline /> : null}</div>
      </div>
      {IS_DEV_CV ? <Skills /> : <CustomerSkills />}
      {IS_DEV_CV ? <Courses /> : <CustomerCourses />}
      <Languages />
      <Education />
      <Interests />
    </>
  );
}

export default App;
