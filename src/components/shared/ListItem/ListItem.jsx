import styles from "../../Courses/ListItem.module.scss";
import itemLogo from "../../../assets/courses/udemy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const ListItem = (props) => {
  return (
    <li className={styles.item} key={props.id}>
      <div className={`grid ${styles.titleContainer}`}>
        <img className={styles.logo} src={itemLogo} alt={"udemy logo"} />
        <div>
          <div className={`grid ${styles.title} justifySpaceBetween`}>
            <h4>{props.title}</h4>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon={regular("calendar-alt")}
              />
              <strong className={styles.dates}>
                {props.dates.from} - {props.dates.to}
              </strong>
            </div>
          </div>
          <p className={styles.copy}>{props.description}</p>
        </div>
      </div>
    </li>
  );
};
