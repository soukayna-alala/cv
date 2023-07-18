import styles from "./Header.module.scss";

export function Header() {
  const { text } = styles;
  function getSoukaynasAge(age = 18) {
    return age;
  }

  const soukaynaAge = getSoukaynasAge(100);

  return <p className={text}>Header Component {soukaynaAge}</p>;
}
