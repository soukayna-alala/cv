import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../shared/LinksListItem/LinksListItem.jsx";
import styles from "./Header.module.scss";
import { EMAIL, JOB_TITLE, NAME } from "./constants.js";

const { avatar, header, list } = styles;

export const Header = () => {
  const mobileNo = "07496 322 120";
  const linksList = [
    {
      href: `tel:${mobileNo}`,
      icon: solid("phone"),
      label: mobileNo,
    },
    {
      href: `mailto:${EMAIL}?subject=${JOB_TITLE}`,
      icon: solid("envelope"),
      label: EMAIL,
    },
    {
      href: "https://tinyurl.com/tepxxtd",
      icon: solid("location-dot"),
      label: "Barkingside, London",
    },
  ];

  return (
    <header className={` ${header} flex justifySpaceBetween `}>
      <div className="flex flexDirectionColumn">
        <h1>{NAME}</h1>
        <h2>{JOB_TITLE}</h2>

        <ul className={list}>
          {linksList.map((i) => (
            <LinksListItem {...i} key={i.label}></LinksListItem>
          ))}
        </ul>
      </div>

      <img className={avatar} src={"my-picture.jpg"} alt="avatar image" />
    </header>
  );
};
