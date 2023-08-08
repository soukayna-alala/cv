import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LinksListItem.module.scss";

export const LinksListItem = (props) => {
  const { href, icon, label } = props;

  return (
    <li className={styles.item}>
      <a
        className="flex alignItemsCenter"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={icon} />
        {label}
      </a>
    </li>
  );
};
