import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../LinksListItem/LinksListItem";
import styles from "./FindMeOnline.module.scss";

export const FindMeOnline = () => {
  const linkedinLink = "linkedin.com/in/soukayna-alala";

  return (
    <div>
      <h3>Find Me Online</h3>
      <ul className={styles.list}>
        <LinksListItem
          label={linkedinLink}
          href={`http://www.${linkedinLink}`}
          icon={brands("linkedin")}
        />
      </ul>
    </div>
  );
};
