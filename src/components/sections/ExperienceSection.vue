<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";
const experiences = [
  {
    period: "2024 — Present",
    role: "Software Developer",
    company: "Company Name",
    description:
      "Developing and maintaining enterprise applications and backend services. Working with APIs, databases, cloud infrastructure, and CI/CD pipelines.",
    technologies: ["Java", "Spring Boot", "Vue", "NestJS", "Docker", "Azure"],
  },
  {
    period: "2022 — 2024",
    role: "Software Developer",
    company: "Previous Company",
    description:
      "Built web applications and backend services while collaborating with cross-functional teams to deliver business solutions.",
    technologies: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker"],
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
            :key="experience.company"
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
                  {{ experience.period }}
                </p>
                <h3 class="mt-1 text-xl font-bold">{{ experience.role }}</h3>
                <p class="mt-1 text-muted">{{ experience.company }}</p>
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
                  <div class="mt-5 flex flex-wrap gap-2">
                    <span
                      v-for="technology in experience.technologies"
                      :key="technology"
                      class="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {{ technology }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
