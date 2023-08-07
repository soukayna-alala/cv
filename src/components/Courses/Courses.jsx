import { LIST } from "./constants";
import styles from "./ListItem.module.scss";
import itemLogo from "../../assets/courses/udemy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
export const Courses = () => {
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {LIST.map((item) => (
          <li className={styles.item} key={item.id}>
            <div className={`grid ${styles.titleContainer}`}>
              <img className={styles.logo} src={itemLogo} alt={"udemy logo"} />
              <div>
                <div className={`grid ${styles.title} justifySpaceBetween`}>
                  <h4>{item.title}</h4>
                  <div>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={regular("calendar-alt")}
                    />
                    <strong className={styles.dates}>
                      {item.dates.from} - {item.dates.to}
                    </strong>
                  </div>
                </div>
                <p className={styles.copy}>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
