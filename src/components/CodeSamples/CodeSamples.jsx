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
