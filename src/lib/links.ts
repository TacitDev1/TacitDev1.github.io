import site from '../../site.config.mjs';

type LinkData = { live: boolean; repo?: string; demoPath?: string; siteUrl?: string };

/** Demo and code links exist only once the GitHub username is set and the project is marked live. */
export function projectLinks(p: LinkData) {
  const user = site.githubUser;
  const ready = Boolean(user) && p.live;
  return {
    demo: ready && p.demoPath ? `https://${user.toLowerCase()}.github.io${p.demoPath}` : null,
    repo: ready && p.repo ? `https://github.com/${user}/${p.repo}` : null,
    site: p.siteUrl ?? null,
  };
}

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path: string) => `${base}${path}`;
