import styles from "./Languages.module.scss";
import ReactCountryFlag from "react-country-flag";
export const Languages = () => {
  const languages = [
    {
      label: "Arabic",
      countryCode: "MA",
      level: "Native",
    },
    {
      label: "English",
      countryCode: "GB",
      level: "Fluent",
    },
    {
      label: "Dutch",
      countryCode: "NL",
      level: "Advanced",
    },
    {
      label: "French",
      countryCode: "FR",
      level: "Intermediate",
    },
  ];
  return (
    <div>
      <h3>Languages</h3>
      <ul className={styles.list}>
        {languages.map((i, index) => (
          <li key={i.label}>
            <ReactCountryFlag
              className={styles.icon}
              countryCode={i.countryCode}
              svg
              style={{
                width: "0.4cm",
                height: "0.4cm",
              }}
            />
            {i.label} ({i.level}){index !== 3 && ","}
          </li>
        ))}
      </ul>
    </div>
  );
};
