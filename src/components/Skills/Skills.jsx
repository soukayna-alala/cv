export const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "Typescript",
    "JavaScript",
    "HTML5",
    "CSS",
    "Git",
    "Vite.",
    "Vitest",
  ];

  return (
    <div>
      <h3>Skills</h3>
      <p>{skills.join(", ")}</p>
    </div>
  );
};
