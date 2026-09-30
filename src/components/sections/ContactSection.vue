<script setup lang="ts">
import MotionReveal from "../common/MotionReveal.vue";

const email = "sirtongzaq@gmail.com";
</script>
<template>
  <section id="contact" class="relative overflow-hidden py-24 sm:py-32">
    <!-- Glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
    />
    <MotionReveal :delay="0.2">
      <div class="relative mx-auto max-w-4xl px-6">
        <div
          class="relative overflow-hidden rounded-3xl border border-border bg-surface/50 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <!-- Decorative grid -->
          <div
            class="pointer-events-none absolute inset-0 opacity-30"
            style="
              background-image:
                linear-gradient(
                  to right,
                  color-mix(in srgb, var(--color-foreground) 6%, transparent) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  color-mix(in srgb, var(--color-foreground) 6%, transparent) 1px,
                  transparent 1px
                );
              background-size: 32px 32px;
            "
          />
          <div class="relative">
            <p
              class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Get In Touch
            </p>
            <h2
              class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Let's build something <span class="text-primary">great.</span>
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-base leading-7 text-muted">
              Have a project, an idea, or just want to say hello? Feel free to
              reach out. I'd love to hear from you.
            </p>
            <!-- Email -->
            <a
              :href="`mailto:${email}`"
              class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
            >
              <span>Let's Talk</span> <span>↗</span>
            </a>
            <!-- Email text -->
            <p class="mt-5 text-sm text-muted">{{ email }}</p>
          </div>
        </div>
      </div>
    </MotionReveal>
  </section>
</template>
