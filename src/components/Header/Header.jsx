import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../shared/LinksListItem/LinksListItem.jsx";
import styles from "./Header.module.scss";
import { DEVELOPER_EMAIL, NAME, CUSTOMER_EMAIL } from "./constants.js";
import { IS_DEV_CV, JOB_TITLE } from "../../constants";

const { avatar, header, list } = styles;

export const Header = () => {
  const mobileNo = "07496 322 120";
  const email = IS_DEV_CV ? DEVELOPER_EMAIL : CUSTOMER_EMAIL;
  const linksList = [
    {
      href: `tel:${mobileNo}`,
      icon: solid("phone"),
      label: mobileNo,
    },
    {
      href: `mailto:${email}?subject=${JOB_TITLE}`,
      icon: solid("envelope"),
      label: email,
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

      <img
        className={avatar}
        src={"Soukayna_alala.jpg"}
        alt="Soukayna alala picture"
      />
    </header>
  );
};
