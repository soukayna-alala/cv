import styles from "./CustomerCourses.module.scss";

export function CustomerCourses() {
  const { bold, richardsCourse, profileContainer } = styles;

  return (
    <div className={profileContainer}>
      <h3>Courses</h3>
      <div className={richardsCourse}>
        <span className={bold}>
          Customer Service Training Course By Richard McMunn:
        </span>
        The definition of great customer service. The importance of Excellent
        Customer service. Things to “NEVER SAY” to customers. Power things to
        say to customers. How to deal with customer complaints L.A.S.T(Listen,
        Apologise, solve, thank)...
      </div>
      <div>
        <span className={bold}>
          MASTER BUSINESS English COMMUNICATION Skills by Aherne:
        </span>
        Understanding an Angry Customer. Handling Complaints and Calming the
        Situation. Dealing Politely with Rude Customers. Explaining Bad News to
        Customers…
      </div>
    </div>
  );
}
