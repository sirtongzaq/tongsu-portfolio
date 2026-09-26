<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";
const projects = [
  {
    title: "Project One",
    description:
      "A modern web application designed to solve a real-world problem with a scalable architecture.",
    technologies: ["Vue", "TypeScript", "NestJS", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "Backend service providing REST APIs with authentication, data processing, and external service integrations.",
    technologies: ["Java", "Spring Boot", "MongoDB", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description:
      "A cloud-native application deployed using containers and CI/CD automation.",
    technologies: ["React", "Node.js", "Docker", "Azure"],
    github: "#",
    demo: "#",
  },
];
</script>
<template>
  <section id="projects" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Heading -->
      <MotionReveal>
        <div
          class="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p
              class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Projects
            </p>
            <h2
              class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Things I've built
            </h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-muted sm:text-right">
            A selection of projects I've worked on, from experiments to
            production applications.
          </p>
        </div>
      </MotionReveal>
      <!-- Projects -->
      <MotionReveal :delay="0.2">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
          >
            <!-- Project visual -->
            <div
              class="relative flex h-48 items-center justify-center overflow-hidden border-b border-border bg-background"
            >
              <!-- Decorative grid -->
              <div
                class="absolute inset-0 opacity-30"
                style="
                  background-image:
                    linear-gradient(
                      to right,
                      rgba(255, 255, 255, 0.05) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to bottom,
                      rgba(255, 255, 255, 0.05) 1px,
                      transparent 1px
                    );
                  background-size: 24px 24px;
                "
              />
              <div
                class="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-2xl font-bold text-primary transition duration-300 group-hover:scale-110"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </div>
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="mt-3 flex-1 text-sm leading-7 text-muted">
                {{ project.description }}
              </p>
              <!-- Technologies -->
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {{ technology }}
                </span>
              </div>
              <!-- Links -->
              <div class="mt-6 flex items-center gap-4">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-muted transition hover:text-primary"
                >
                  GitHub ↗
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-muted transition hover:text-primary"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
