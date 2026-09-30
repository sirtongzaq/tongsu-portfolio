```vue
<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sirtongzaq",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/narongrit-uppalabat-397289406",
    icon: "linkedin",
  },
];
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Main Footer -->
      <div
        class="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row"
      >
        <!-- Logo -->
        <a href="#home" class="text-lg font-bold tracking-tight">
          Tongsu<span class="text-primary">.</span>
        </a>

        <!-- Social -->
        <div class="flex items-center gap-3">
          <!-- GitHub -->
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <!-- GitHub -->
            <svg
              v-if="social.icon === 'github'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42
                2.865 8.17 6.839 9.49.5.092.682-.217.682-.483
                0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34
                -3.369-1.34-.455-1.156-1.11-1.463-1.11-1.463
                -.908-.621.069-.608.069-.608 1.004.071
                1.531 1.03 1.531 1.03.892 1.53 2.341 1.087
                2.91.832.092-.647.35-1.087.636-1.338
                -2.22-.253-4.555-1.11-4.555-4.943
                0-1.091.39-1.984 1.029-2.683
                -.103-.253-.446-1.27.098-2.647
                0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12
                6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294
                2.748-1.025 2.748-1.025.546 1.377.203 2.394
                .1 2.647.64.699 1.028 1.592 1.028 2.683
                0 3.842-2.339 4.687-4.566 4.935.359.309.678.92
                .678 1.852 0 1.336-.012 2.415-.012 2.744
                0 .268.18.58.688.482A10.004 10.004 0 0 0 22
                12c0-5.523-4.477-10-10-10Z"
              />
            </svg>

            <!-- LinkedIn -->
            <svg
              v-else-if="social.icon === 'linkedin'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569
                c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351
                V8.999h3.414v1.561h.046c.476-.9
                1.637-1.85 3.37-1.85 3.605 0 4.267 2.372
                4.267 5.455v6.287ZM5.337 7.433
                a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1
                0 4.124ZM3.56 20.452h3.558V8.999H3.56v11.453Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-border py-6 text-center text-sm text-muted">
        <p>
          © {{ currentYear }} Narongrit Uppalabat. Built with
          <span class="text-primary">Vue</span>
          &amp;
          <span class="text-primary">Tailwind CSS</span>.
        </p>
      </div>
    </div>
  </footer>
</template>
