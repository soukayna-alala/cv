import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const ListItem = ({
  id,
  logo,
  title,
  dates,
  description,
  hasIcon,
  list,
}) => {
  const {
    item,
    ulList,
    titleContainer,
    icon,
    img,
    heading,
    term,
    calendar,
    copy,
  } = styles;

  return (
    <li className={item} key={id}>
      <div className={`grid ${titleContainer}`}>
        {hasIcon ? (
          <FontAwesomeIcon className={icon} icon={logo} />
        ) : (
          <img className={img} src={logo} alt={logo} />
        )}

        <div>
          <div className={`grid ${heading} justifySpaceBetween`}>
            <h4>{title}</h4>
            <div>
              <FontAwesomeIcon
                className={calendar}
                icon={regular("calendar-alt")}
              />
              <strong className={term}>
                {dates.from} - {dates.to}
              </strong>
            </div>
          </div>
          {description ? <p className={copy}>{description}</p> : null}
          {list ? (
            <ul className={ulList}>
              {list.map((i) => {
                return <li key={i}>{i}</li>;
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
};
