<script setup lang="ts">
import { onMounted, ref } from "vue";
import { motion, AnimatePresence } from "motion-v";
import { useTheme } from "../../composables/useTheme";

const isOpen = ref(false);
const { theme, init: initTheme, toggle: toggleTheme } = useTheme();
onMounted(initTheme);

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="mx-auto mt-3 flex h-12 w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full border border-foreground/10 bg-background/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5"
    >
      <!-- Logo -->
      <a href="#home" class="group flex items-center gap-2" @click="closeMenu">
        <span class="text-sm font-medium tracking-tight text-foreground">
          Tongsu<span class="text-primary">.</span>
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <!-- Theme toggle -->
        <button
          type="button"
          :aria-label="
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          "
          class="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
          @click="toggleTheme"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <template v-if="theme === 'dark'">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              />
            </template>
            <path v-else d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        </button>

        <!-- Desktop CTA -->
        <a
          href="#contact"
          class="hidden rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-transform duration-300 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/5 md:block hover:scale-105"
        >
          Let's talk
        </a>

        <!-- Mobile button -->
      <button
        type="button"
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
        class="relative flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground md:hidden"
        @click="isOpen = !isOpen"
      >
        <span
          class="absolute h-px w-4 bg-current transition-transform duration-300"
          :class="isOpen ? 'rotate-45' : '-translate-y-1'"
        />

        <span
          class="absolute h-px w-4 bg-current transition-transform duration-300"
          :class="isOpen ? '-rotate-45' : 'translate-y-1'"
        />
      </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        :initial="{
          opacity: 0,
          y: -8,
          scale: 0.98,
        }"
        :animate="{
          opacity: 1,
          y: 0,
          scale: 1,
        }"
        :exit="{
          opacity: 0,
          y: -8,
          scale: 0.98,
        }"
        :transition="{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }"
        class="mx-4 mt-2 rounded-2xl border border-foreground/10 bg-background/90 p-2 shadow-2xl shadow-black/20 backdrop-blur-2xl md:hidden"
      >
        <a
          v-for="(item, index) in navItems"
          :key="item.name"
          :href="item.href"
          class="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
          @click="closeMenu"
        >
          <motion.span
            :initial="{ opacity: 0, x: -8 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{
              delay: index * 0.04,
            }"
            class="block"
          >
            {{ item.name }}
          </motion.span>
        </a>

        <div class="my-2 h-px bg-foreground/10" />

        <a
          href="#contact"
          class="block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
          @click="closeMenu"
        >
          Let's talk
        </a>
      </motion.div>
    </AnimatePresence>
  </header>
</template>
