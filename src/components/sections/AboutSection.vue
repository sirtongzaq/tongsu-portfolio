<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";
</script>
<template>
  <section id="about" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <MotionReveal>
        <!-- Heading -->
        <div class="mb-14">
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
          >
            About Me
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Building things with <span class="text-primary">purpose.</span>
          </h2>
        </div>
      </MotionReveal>
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <!-- Description -->
        <MotionReveal :delay="0.1">
          <div class="space-y-6 text-muted">
            <p class="text-lg leading-8">
              I'm a Software Developer who enjoys building reliable and scalable
              applications, from backend services to modern web interfaces.
            </p>
            <p class="leading-7">
              I work across different layers of an application, including
              backend development, frontend development, databases, APIs, and
              cloud infrastructure.
            </p>
            <p class="leading-7">
              I enjoy solving problems, learning new technologies, and turning
              ideas into applications that are simple, maintainable, and useful.
            </p>
          </div>
        </MotionReveal>
        <!-- Highlights -->
        <MotionReveal :delay="0.2">
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              class="rounded-xl border border-border bg-surface/50 p-5 transition hover:border-primary/50"
            >
              <div
                class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                &lt;/&gt;
              </div>
              <h3 class="font-semibold">Full-Stack Development</h3>
              <p class="mt-2 text-sm leading-6 text-muted">
                Building applications across frontend, backend, and APIs.
              </p>
            </div>
            <div
              class="rounded-xl border border-border bg-surface/50 p-5 transition hover:border-primary/50"
            >
              <div
                class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                ☁
              </div>
              <h3 class="font-semibold">Cloud &amp; DevOps</h3>
              <p class="mt-2 text-sm leading-6 text-muted">
                Working with containers, Kubernetes, CI/CD, and cloud
                infrastructure.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
