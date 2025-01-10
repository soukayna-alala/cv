import styles from "./Interests.module.scss";
import { IS_DEV_CV } from "../../constants";

export const Interests = () => {
  const { copy } = styles;

  return (
    <div>
      <h3>Interests</h3>
      <p className={copy}>
        {IS_DEV_CV ? (
          <span> Frontend development, </span>
        ) : (
          <span>Team Collaboration, Helping Others, </span>
        )}
        learning new technologies, learning new languages, reading books,
        engraving.
      </p>
    </div>
  );
};
