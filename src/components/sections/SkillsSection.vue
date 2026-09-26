```vue
<script setup lang="ts">
const skillsRow1 = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "TypeScript", icon: "TS" },
  { name: "Vue.js", icon: "V" },
  { name: "React", icon: "⚛" },
  { name: "Angular", icon: "A" },
  { name: "NestJS", icon: "N" },
];

const skillsRow2 = [
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸" },
  { name: "Azure", icon: "☁" },
  { name: "GitHub Actions", icon: "⚡" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "MongoDB", icon: "M" },
  { name: "Redis", icon: "R" },
];
</script>

<template>
  <section id="skills" class="relative overflow-hidden py-24 sm:py-32">
    <!-- Background glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
    />

    <div class="relative">
      <!-- Section heading -->
      <div class="mx-auto mb-16 max-w-6xl px-6 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Technologies
        </p>

        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Skills &amp; Tools
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-muted">
          Technologies and tools I use to build modern, scalable applications.
        </p>
      </div>

      <!-- Row 1 -->
      <div class="marquee mb-5">
        <div class="marquee-track animate-marquee-left">
          <!-- Original -->
          <div
            v-for="skill in skillsRow1"
            :key="`row1-${skill.name}`"
            class="skill-card"
          >
            <span class="skill-icon">
              {{ skill.icon }}
            </span>

            <span>{{ skill.name }}</span>
          </div>

          <!-- Duplicate -->
          <div
            v-for="skill in skillsRow1"
            :key="`row1-copy-${skill.name}`"
            class="skill-card"
            aria-hidden="true"
          >
            <span class="skill-icon">
              {{ skill.icon }}
            </span>

            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="marquee">
        <div class="marquee-track animate-marquee-right">
          <!-- Original -->
          <div
            v-for="skill in skillsRow2"
            :key="`row2-${skill.name}`"
            class="skill-card"
          >
            <span class="skill-icon">
              {{ skill.icon }}
            </span>

            <span>{{ skill.name }}</span>
          </div>

          <!-- Duplicate -->
          <div
            v-for="skill in skillsRow2"
            :key="`row2-copy-${skill.name}`"
            class="skill-card"
            aria-hidden="true"
          >
            <span class="skill-icon">
              {{ skill.icon }}
            </span>

            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <!-- Edge fade -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent sm:w-40"
      />

      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent sm:w-40"
      />
    </div>
  </section>
</template>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  padding: 6px 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 1rem;
}

.skill-card {
  display: flex;
  min-width: 180px;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 0.875rem;
  background: color-mix(in srgb, var(--color-surface) 85%, transparent);
  padding: 0.875rem 1.25rem;
  color: var(--color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.skill-card:hover {
  border-color: var(--color-primary);
  background: var(--color-surface-hover);
  transform: translateY(-3px);
}

.skill-icon {
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background: color-mix(in srgb, var(--color-primary) 15%, transparent);
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 700;
}

.animate-marquee-left {
  animation: marquee-left 28s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 32s linear infinite;
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right {
    animation-play-state: paused;
  }
}
</style>
