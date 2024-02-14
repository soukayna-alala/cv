import styles from "./Skills.module.scss";

export const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Media Queries",
    "JavaScript",
    "React",
    "Typescript",
    "React Hook Form",
    "React Hooks",
    "Git",
    "Bootstrap",
    "SCSS",
    "Vite",
  ];

  return (
    <div>
      <h3>Skills</h3>
      <p className={styles.copy}>{skills.join(", ")}</p>
    </div>
  );
};
