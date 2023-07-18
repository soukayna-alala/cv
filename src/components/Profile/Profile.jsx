import styles from "./Profile.module.scss";
export function Profile() {
  const { text } = styles;

  return (
    <div>
      <p className={text}>Profile</p>
    </div>
  );
}
