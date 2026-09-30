<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";

type Education = {
  period: string;
  school: string;
  program: string;
  result: string;
};

const educations: Education[] = [
  {
    period: "2020 — 2024",
    school: "Ubon Ratchathani University",
    program: "Data Science and Software Innovation (B.Sc.)",
    result: "GPAX 3.59 · Second-Class Honors",
  },
  {
    period: "2017 — 2020",
    school: "Benchama Maharat School",
    program: "Science Computer (Sci-Com)",
    result: "GPAX 2.82",
  }
];
</script>
<template>
  <section id="education" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <!-- Heading -->
      <MotionReveal>
        <div class="mb-16 text-center">
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Education
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Where I studied
          </h2>
        </div>
      </MotionReveal>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-[7px] top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
        />
        <MotionReveal :delay="0.2">
          <div
            v-for="(edu, index) in educations"
            :key="`${edu.school}-${edu.period}`"
            class="relative mb-16 last:mb-0"
          >
            <div
              class="absolute left-0 top-1 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(139,92,246,0.15)] md:left-1/2 md:-translate-x-1/2"
            />
            <div class="ml-10 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
              <div
                class="mb-4 md:mb-0"
                :class="index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'"
              >
                <p class="text-sm font-medium text-primary">{{ edu.period }}</p>
                <h3 class="mt-1 text-xl font-bold">{{ edu.school }}</h3>
              </div>
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
                  <p class="font-medium">{{ edu.program }}</p>
                  <p class="mt-2 text-sm text-muted">{{ edu.result }}</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
