// Single source of truth for skills.
// - `skills`: the ordered list shown in "Skills & Tools" (split into 2 rows)
// - `iconFor`: name → icon, also used by the scrolling chips in Experience

export const skillIcons: Record<string, string> = {
  Java: "☕",
  "Spring Boot": "🌱",
  TypeScript: "TS",
  "Vue.js": "V",
  Vue: "V",
  React: "⚛",
  Angular: "A",
  NextJs: "▲",
  NestJS: "N",
  "Node.js": "⬢",
  Docker: "🐳",
  Kubernetes: "☸",
  Azure: "☁",
  "GitHub Actions": "⚡",
  PostgreSQL: "PG",
  MongoDB: "M",
  Redis: "R",
  Kafka: "K",
};

export const iconFor = (name: string) =>
  skillIcons[name] ?? name[0]!.toUpperCase();

export const skills = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Angular",
  "NextJs",
  "NestJS",
  "Node.js",
  "Docker",
  "Kubernetes",
  "Azure",
  "GitHub Actions",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
];

/** Split into `n` rows of roughly equal size (first rows get the extras). */
export function toRows(list: string[], n = 2) {
  const size = Math.ceil(list.length / n);
  return Array.from({ length: n }, (_, i) =>
    list.slice(i * size, (i + 1) * size).map((name) => ({
      name,
      icon: iconFor(name),
    })),
  ).filter((row) => row.length);
}
