import { primaryNavigation } from "../data/home";
import { SITE_NAME, SITE_SUBTITLE } from "../lib/site-metadata";
import { sitePath } from "../lib/site-path";

const pagePaths = {
  problem: "/",
  history: "/history/",
  journey: "/journey/",
  proof: "/proof/",
} as const;

export function SiteHeader({
  current,
}: {
  current?: keyof typeof pagePaths;
}) {
  return (
    <header className="site-header" id="top">
      <div className="masthead">
        <a
          className="site-identity"
          href={sitePath("/")}
          aria-label={`${SITE_NAME} — Home`}
        >
          <span className="site-monogram" aria-hidden="true">Θ</span>
          <span>
            <strong>{SITE_NAME}</strong>
            <small>{SITE_SUBTITLE}</small>
          </span>
        </a>
      </div>
      <nav className="primary-navigation" aria-label="Primary navigation">
        {primaryNavigation.map((item) => (
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
