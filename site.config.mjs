// Everything personal about the site lives here. A blank link is simply not shown.
export default {
  name: 'Christoph van Aswegen',
  kicker: 'Projects',
  intro: 'A few things I have built. The three tools have working demos on invented data, and their code is public.',
  description:
    'Projects by Christoph van Aswegen: a marketing engine run by AI agents, a service desk wallboard, an SAP knowledge hub and the ETZ Global website.',

  // GitHub username that hosts this site and the template repos. While this is
  // empty, demo and code buttons stay hidden and the site URL is a placeholder.
  // The company website's source is never public: that project has no repo link.
  githubUser: 'TacitDev1',

  // Optional contact links. Leave '' to hide.
  linkedin: '',
  email: 'christoph.vanaswegen@gmail.com',

  // Contact form. If contactEndpoint is set (for example a Formspree form URL),
  // the form posts there. Otherwise it opens the visitor's email app addressed
  // to `email`. With both blank, the form says it is not connected yet.
  contactEndpoint: '',

  about: [
    'I build software for problems I run into: AI agent teams, live dashboards, video pipelines, knowledge tools and websites.',
    'My day job is SAP Security & Authorizations and Fiori administration consulting at ETZ Global.',
  ],

  // Broad summary from the CV.
  background: [
    'I am an SAP Security and Fiori consultant based in Cape Town, working remotely on SAP S/4HANA for clients in the US. The work covers roles and authorizations, the Fiori launchpad and SAP Build Work Zone, single sign-on, and release upgrades. I started in ABAP development and still write ABAP and SAPUI5.',
    'I also run the company’s Jira Service Management desks: onboarding clients, automation, SLAs, and the support teams’ workload.',
  ],
  credentials: [
    'SAP Certified Security Administrator (2026)',
    'SAP Certified Fiori System Administration (2026)',
    'SAP Certified ABAP Cloud Back-End Developer (2024)',
    'BSc Information Technology, Software Engineering (2023)',
  ],
};
