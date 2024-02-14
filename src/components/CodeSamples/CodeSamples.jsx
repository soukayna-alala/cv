import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../shared/LinksListItem/LinksListItem";

export const CodeSamples = () => {
  const username = "soukayna-alala";
  const github = `github.com/${username}`;
  const linksList = [
    {
      href: `https://${github}`,
      icon: brands("github"),
      label: github,
    },
    {
      href: `https://${github}/star-wars-react-challenge`,
      icon: brands("github"),
      label: "Star Wars React challenge",
    },
  ];

  return (
    <div>
      <h3>Code samples</h3>
      <ul>
        {linksList.map((i) => (
          <LinksListItem key={i.href} {...i} />
        ))}
      </ul>
    </div>
  );
};
