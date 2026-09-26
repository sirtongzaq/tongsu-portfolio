```vue
<script setup lang="ts">
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sirtongzaq",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/narongrit-uppalabat-397289406",
  },
];
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden"
  >
    <!-- ========================================= -->
    <!-- Animated Background -->
    <!-- ========================================= -->

    <!-- Large gradient glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse"
    />

    <!-- Gradient blob -->
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px] animate-float"
    />

    <div
      class="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] animate-float-reverse"
    />

    <!-- ========================================= -->
    <!-- Grid Background -->
    <!-- ========================================= -->

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.035]"
      style="
        background-image:
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px);
        background-size: 48px 48px;
      "
    />

    <!-- ========================================= -->
    <!-- Content -->
    <!-- ========================================= -->

    <div
      class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <!-- ======================================= -->
      <!-- Left Content -->
      <!-- ======================================= -->

      <div>
        <!-- Available badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur"
        >
          <span
            class="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
          />

          Available for opportunities
        </div>

        <!-- Name -->
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm

          <span
            class="block bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
          >
            Tongsu.
          </span>
        </h1>

        <!-- Role -->
        <div class="mt-6">
          <p class="text-xl font-medium text-foreground sm:text-2xl">
            Software Developer
          </p>

          <p class="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">
            I build scalable backend systems, modern web applications, and cloud
            infrastructure.
          </p>
        </div>

        <!-- CTA -->
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            View Projects

            <span
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <a
            href="#contact"
            class="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-surface"
          >
            Contact Me
          </a>
        </div>

        <!-- Social -->
        <div class="mt-8 flex items-center gap-3">
          <span class="mr-2 text-sm text-muted"> Find me on </span>

          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            {{ social.name }}
          </a>
        </div>
      </div>

      <!-- ======================================= -->
      <!-- Right Visual / Orbit -->
      <!-- ======================================= -->

      <div class="relative mx-auto hidden h-[420px] w-[420px] lg:block">
        <!-- Outer glow -->
        <div
          class="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
        />

        <!-- Orbit 1 -->
        <div
          class="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-spin-slow"
        >
          <!-- Orbit dot -->
          <div
            class="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.8)]"
          />
        </div>

        <!-- Orbit 2 -->
        <div
          class="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border animate-spin-reverse"
        >
          <!-- Orbit dot -->
          <div
            class="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.8)]"
          />
        </div>

        <!-- Center -->
        <div
          class="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-primary/30 bg-surface/80 shadow-2xl shadow-primary/10 backdrop-blur-xl"
        >
          <div class="text-center">
            <div
              class="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            >
              TS
            </div>

            <div class="mt-1 text-xs text-muted">Developer</div>
          </div>
        </div>

        <!-- Floating tech labels -->

        <div
          class="absolute left-4 top-24 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur animate-float"
        >
          Java
        </div>

        <div
          class="absolute right-2 top-32 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur animate-float-reverse"
        >
          Vue
        </div>

        <div
          class="absolute bottom-24 left-12 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur animate-float"
        >
          Docker
        </div>

        <div
          class="absolute bottom-16 right-8 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur animate-float-reverse"
        >
          Azure
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================================= */
/* Gradient animation */
/* ========================================= */

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

/* ========================================= */
/* Floating animation */
/* ========================================= */

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

/* ========================================= */
/* Orbit animation */
/* ========================================= */

.animate-spin-slow {
  animation: spin 18s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 25s linear infinite;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

/* ========================================= */
/* Scroll animation */
/* ========================================= */

.animate-scroll {
  animation: scroll 1.8s ease-in-out infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  70% {
    transform: translateY(12px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

/* ========================================= */
/* Reduced motion */
/* ========================================= */

@media (prefers-reduced-motion: reduce) {
  .animate-gradient,
  .animate-float,
  .animate-float-reverse,
  .animate-spin-slow,
  .animate-spin-reverse,
  .animate-scroll {
    animation: none;
  }
}
</style>
