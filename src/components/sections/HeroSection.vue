<script setup lang="ts">
import { motion } from "motion-v";
const socialLinks = [
  { name: "GitHub", href: "https://github.com/sirtongzaq" },
  { name: "LinkedIn", href: "#" },
];
</script>
<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden"
  >
    <!-- Ambient background -->
    <motion.div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      :animate="{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }"
      :transition="{ duration: 8, repeat: Infinity, ease: 'easeInOut' }"
    />
    <motion.div
      class="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"
      :animate="{ y: [0, -20, 0], x: [0, 10, 0] }"
      :transition="{ duration: 9, repeat: Infinity, ease: 'easeInOut' }"
    />
    <motion.div
      class="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]"
      :animate="{ y: [0, 20, 0], x: [0, -10, 0] }"
      :transition="{ duration: 10, repeat: Infinity, ease: 'easeInOut' }"
    />
    <!-- Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.035]"
      style="
        background-image:
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px);
        background-size: 48px 48px;
      "
    />
    <div
      class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <!-- LEFT -->
      <div>
        <motion.div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur"
          :initial="{ opacity: 0, y: 12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <span
            class="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
          />
          Available for opportunities
        </motion.div>
        <motion.h1
          class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
        >
          Hi, I'm
          <span
            class="block bg-gradient-to-r from-primary via-blue-400 to-sky-400 bg-clip-text text-transparent animate-gradient"
          >
            Tongsu.
          </span>
        </motion.h1>
        <motion.div
          class="mt-6"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.25 }"
        >
          <p class="text-xl font-medium text-foreground sm:text-2xl">
            Software Developer
          </p>
          <p class="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">
            I build scalable backend systems, modern web applications, and cloud
            infrastructure.
          </p>
        </motion.div>
        <motion.div
          class="mt-8 flex flex-wrap items-center gap-4"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          <motion.a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
            :whileHover="{ y: -2 }"
            :whilePress="{ scale: 0.97 }"
            :transition="{ duration: 0.2 }"
          >
            View Projects
            <span
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            class="rounded-lg border border-border px-6 py-3 font-medium text-foreground hover:border-primary/50 hover:bg-surface"
            :whileHover="{ y: -2 }"
            :whilePress="{ scale: 0.97 }"
            :transition="{ duration: 0.2 }"
          >
            Contact Me
          </motion.a>
        </motion.div>
        <motion.div
          class="mt-8 flex items-center gap-3"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.55 }"
        >
          <span class="mr-2 text-sm text-muted"> Find me on </span>
          <motion.a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            :whileHover="{ y: -2 }"
            :whilePress="{ scale: 0.96 }"
          >
            {{ social.name }}
          </motion.a>
        </motion.div>
      </div>
      <!-- ORBIT -->
      <motion.div
        class="relative mx-auto hidden h-[420px] w-[420px] lg:block"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }"
      >
        <div
          class="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
        />
        <!-- Orbit 1 -->
        <motion.div
          class="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
          :animate="{ rotate: 360 }"
          :transition="{ duration: 18, repeat: Infinity, ease: 'linear' }"
        >
          <div
            class="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.8)]"
          />
        </motion.div>
        <!-- Orbit 2 -->
        <motion.div
          class="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
          :animate="{ rotate: -360 }"
          :transition="{ duration: 25, repeat: Infinity, ease: 'linear' }"
        >
          <div
            class="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(192,132,252,0.8)]"
          />
        </motion.div>
        <!-- Center -->
        <motion.div
          class="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-primary/30 bg-surface/80 shadow-2xl shadow-primary/10 backdrop-blur-xl"
          :animate="{ y: [0, -5, 0] }"
          :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut' }"
        >
          <div class="text-center">
            <div
              class="text-4xl font-bold bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent"
            >
              TS
            </div>
            <div class="mt-1 text-xs text-muted">Developer</div>
          </div>
        </motion.div>
        <!-- Floating labels -->
        <motion.div
          class="absolute left-4 top-24 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur"
          :animate="{ y: [0, -8, 0] }"
          :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut' }"
        >
          Java
        </motion.div>
        <motion.div
          class="absolute right-2 top-32 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur"
          :animate="{ y: [0, 8, 0] }"
          :transition="{ duration: 6, repeat: Infinity, ease: 'easeInOut' }"
        >
          Vue
        </motion.div>
        <motion.div
          class="absolute bottom-24 left-12 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur"
          :animate="{ y: [0, -7, 0] }"
          :transition="{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }"
        >
          Docker
        </motion.div>
        <motion.div
          class="absolute bottom-16 right-8 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur"
          :animate="{ y: [0, 7, 0] }"
          :transition="{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }"
        >
          Azure
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>
<style scoped>
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
@media (prefers-reduced-motion: reduce) {
  .animate-gradient {
    animation: none;
  }
}
</style>
