export const Skills = () => {
  const skills = [
    "React",
    "React Hook Form",
    "React Hooks",
    "Typescript",
    "JavaScript",
    "HTML",
    "HTML Emails",
    "CSS",
    "Media Queries",
    "Git",
    "Bootstrap",
    "Vite.",
  ];

  return (
    <div>
      <h3>Skills</h3>
      <p>{skills.join(", ")}</p>
    </div>
  );
};
