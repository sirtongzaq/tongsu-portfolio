<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";
import SkillMarquee from "../common/SkillMarquee.vue";

type Experience = {
  role: string;
  company: string;
  type: string; // employment type
  mode?: string; // Hybrid / Remote / On-site
  start: { year: number; month: number }; // month: 1-12
  end?: { year: number; month: number }; // omit = present
  description: string;
  technologies: string[];
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Total months, counting both the start and end month (same as LinkedIn).
// "Present" is computed from today's date, never hardcoded.
function monthsBetween(start: Experience["start"], end?: Experience["end"]) {
  const now = new Date();
  const e = end ?? { year: now.getFullYear(), month: now.getMonth() + 1 };
  return Math.max(1, (e.year - start.year) * 12 + (e.month - start.month) + 1);
}

function duration(exp: Experience) {
  const total = monthsBetween(exp.start, exp.end);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

function period(exp: Experience) {
  const fmt = (d: { year: number; month: number }) =>
    `${MONTHS[d.month - 1]} ${d.year}`;
  return `${fmt(exp.start)} — ${exp.end ? fmt(exp.end) : "Present"}`;
}

const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Entronica",
    type: "Full-time",
    mode: "Hybrid",
    start: { year: 2024, month: 4 },
    description:
      "Developing and maintaining enterprise applications and backend services. Working with APIs, databases, cloud infrastructure, and CI/CD pipelines.",
    technologies: [
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
    ],
  },
  {
    role: "Software Developer",
    company: "Entronica",
    type: "Internship",
    start: { year: 2023, month: 11 },
    end: { year: 2024, month: 3 },
    description:
      "Started my career here as an intern, building features and learning real-world development practices with the team before joining full-time.",
    technologies: [
      "TypeScript",
      "React",
      "NextJs",
      "NestJS",
      "Node.js",
      "GitHub Actions",
      "MongoDB",
    ],
  },
];
</script>
<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <!-- Heading -->
      <MotionReveal>
        <div class="mb-16 text-center">
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Experience
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Where I've worked
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-muted">
            A journey through my professional experience and the technologies
            I've worked with.
          </p>
        </div>
      </MotionReveal>
      <!-- Timeline -->
      <div class="relative">
        <!-- Line -->
        <div
          class="absolute left-[7px] top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
        />
        <MotionReveal :delay="0.2">
          <div
            v-for="(experience, index) in experiences"
            :key="`${experience.company}-${experience.type}-${experience.start.year}-${experience.start.month}`"
            class="relative mb-16 last:mb-0"
          >
            <!-- Dot -->
            <div
              class="absolute left-0 top-1 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(139,92,246,0.15)] md:left-1/2 md:-translate-x-1/2"
            />
            <div class="ml-10 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
              <!-- Left -->
              <div
                class="mb-4 md:mb-0"
                :class="index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'"
              >
                <p class="text-sm font-medium text-primary">
                  {{ period(experience) }}
                  <span class="text-muted">· {{ duration(experience) }}</span>
                </p>
                <h3 class="mt-1 text-xl font-bold">{{ experience.role }}</h3>
                <p class="mt-1 text-muted">
                  {{ experience.company }} · {{ experience.type }}
                </p>
                <p v-if="experience.mode" class="mt-0.5 text-sm text-muted">
                  {{ experience.mode }}
                </p>
              </div>
              <!-- Right -->
              <div
                :class="
                  index % 2 === 0
                    ? 'md:col-start-2'
                    : 'md:col-start-1 md:row-start-1'
                "
              >
                <div
                  class="rounded-xl border border-border bg-surface/50 p-6 transition duration-300 hover:border-primary/50 hover:bg-surface"
                >
                  <p class="text-sm leading-7 text-muted">
                    {{ experience.description }}
                  </p>
                  <SkillMarquee
                    class="mt-5"
                    :items="experience.technologies"
                    :duration="Math.max(14, experience.technologies.length * 4)"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
