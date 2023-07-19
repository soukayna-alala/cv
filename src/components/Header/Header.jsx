import styles from "./Header.module.scss";

export function Header() {
  const { text } = styles;

  return <p className={text}>Header Component</p>;
}
