import styles from "./Header.module.scss";
import { EMAIL, JOB_TITLE, NAME } from "./constants.js";

export function Header() {
  return (
    <div>
      <h1>{NAME}</h1>
      <h2>{JOB_TITLE}</h2>
    </div>
  );
}
