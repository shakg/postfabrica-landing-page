export interface DeepDive {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topics: string[];
  tags: string[];
  featured?: boolean;
  externalUrl?: string;
}

export const deepDives: DeepDive[] = [
  {
    slug: "qt-patterns-guide",
    title: "C++/Qt/QML Patterns & Best Practices",
    excerpt:
      "200+ open-source Qt repositories analyzed across GitHub, GitLab, KDE GitLab, and Bitbucket. From CMake setup to QML architecture, testing to CI/CD — the patterns that emerged from reading actual production code.",
    date: "2026-07-14",
    readTime: "18 min",
    topics: ["C++", "Qt", "QML"],
    tags: ["cmake", "qml", "architecture", "testing", "ci-cd", "qt6", "open-source"],
    featured: true,
  },
  {
    slug: "coming-soon",
    title: "More deep dives coming soon",
    excerpt:
      "Future research will cover Rust ecosystems, Go microservices, TypeScript at scale, and more. This page will grow as new analyses are published.",
    date: "2026-07-14",
    readTime: "—",
    topics: ["Meta"],
    tags: ["upcoming"],
    externalUrl: "https://github.com/shakg/qt-patterns-guide",
  },
];

export const allTopics: string[] = [
  ...new Set(deepDives.flatMap((d) => d.topics)),
].sort();

export const allTags: string[] = [
  ...new Set(deepDives.flatMap((d) => d.tags)),
].sort();
