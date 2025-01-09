export const Customerskills = () => {
  const skills = [
    "Strong customer service and interpersonal skills",
    "Proficient in cash handling and operating POS systems",
    "Excellent time management and multitasking abilities",
    "Skilled in resolving customer complaints and inquiries",
    "Maintaining cleanliness and organization in the store",
    "Team-oriented with the ability to work independently when needed",
    "Knowledgeable in inventory management and restocking",
    "Fluent in Arabic, English, Dutch, and intermediate French\n",
  ];

  return (
    <div>
      <h3>Skills</h3>
      <p>{skills.join(". ")}</p>
    </div>
  );
};
