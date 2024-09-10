import styles from "../../Courses/ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const ListItem = (props) => {
  return (
    <li className={styles.item} key={props.id}>
      <div className={`grid ${styles.titleContainer}`}>
        {props.hasIcon ? (
          <FontAwesomeIcon className={styles.icon} icon={props.logo} />
        ) : (
          <img className={styles.logo} src={props.logo} alt={props.logo} />
        )}

        <div>
          <div className={`grid ${styles.title} justifySpaceBetween`}>
            <h4>{props.title}</h4>
            <div>
              <FontAwesomeIcon
                className={styles.calendar}
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
