import { primaryNavigation } from "../data/home";
import { mirskyHomePath, mirskySiteName } from "../data/perfect-mirsky";
import { SITE_NAME, SITE_SUBTITLE } from "../lib/site-metadata";
import { sitePath } from "../lib/site-path";

const pagePaths = {
  problem: "/",
  history: "/history/",
  journey: "/journey/",
  proof: "/proof/",
  mirsky: mirskyHomePath,
} as const;

const karpelevicNavigation = [...primaryNavigation, { label: mirskySiteName, href: pagePaths.mirsky }];
const mirskyNavigation = [
  { label: "Overview", href: mirskyHomePath },
  { label: "Eight topics", href: mirskyHomePath + "#topics" },
  { label: "References", href: mirskyHomePath + "#references" },
  { label: "Karpelevič", href: pagePaths.problem },
];

export function SiteHeader({
  current,
  section = "karpelevic",
}: {
  current?: keyof typeof pagePaths;
  section?: "karpelevic" | "mirsky";
}) {
  const isMirsky = section === "mirsky";
  const name = isMirsky ? mirskySiteName : SITE_NAME;
  const subtitle = isMirsky ? "Eigenvalues of doubly stochastic matrices" : SITE_SUBTITLE;
  const navigation = isMirsky ? mirskyNavigation : karpelevicNavigation;
  return (
    <header className="site-header" id="top">
      <div className="masthead">
        <a
          className="site-identity"
          href={sitePath(isMirsky ? mirskyHomePath : "/")}
          aria-label={`${name} — Home`}
        >
          <span className="site-monogram" aria-hidden="true">{isMirsky ? "Π" : "Θ"}</span>
          <span>
            <strong>{name}</strong>
            <small>{subtitle}</small>
          </span>
        </a>
      </div>
      <nav className="primary-navigation" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            aria-current={current && item.href === pagePaths[current] ? "page" : undefined}
            href={sitePath(item.href)}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
