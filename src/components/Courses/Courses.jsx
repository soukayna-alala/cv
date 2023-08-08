import { ListItem } from "../shared/ListItem/ListItem";
import { DATA } from "./constants";

export const Courses = () => {
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {DATA.map((i) => {
          return <ListItem {...i} key={i.id} />;
        })}
      </ul>
    </div>
  );
};
