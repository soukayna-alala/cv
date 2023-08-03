import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LinksListItem } from "../LinksListItem/LinksListItem";

export const CodeSamples = () => {
  const username = "soukayna-alala";
  const codepen = `codepen.io/${username}`;
  const github = `github.com/${username}`;

  const linksList = [
    {
      href: `https://${codepen}`,
      icon: brands("codepen"),
      label: codepen,
    },
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
        {linksList.map((i) => {
          return (
            <LinksListItem
              key={i.href}
              href={i.href}
              label={i.label}
              icon={i.icon}
            />
          );
        })}
      </ul>
    </div>
  );
};
