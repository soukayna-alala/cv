import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../shared/LinksListItem/LinksListItem";
import styles from "./FindMeOnline.module.scss";
import { IS_DEV_CV } from "../../constants";

export const FindMeOnline = () => {
  const username = "soukayna-alala";
  const linkedinLink = `linkedin.com/in/${username}`;
  const github = `github.com/${username}`;

  return (
    <div>
      <h3>Find Me Online</h3>
      <ul className={styles.list}>
        {IS_DEV_CV ? (
          <LinksListItem
            label={github}
            href={`https://${github}`}
            icon={brands("github")}
          />
        ) : null}
        <LinksListItem
          label={linkedinLink}
          href={`http://www.${linkedinLink}`}
          icon={brands("linkedin")}
        />
      </ul>
    </div>
  );
};
