import { ListItem } from "../shared/ListItem/ListItem";
import { DATA } from "./constants";

export const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <ul>
        {DATA.map((i) => {
          return <ListItem {...i} key={i.id} />;
        })}
      </ul>
    </div>
  );
};
