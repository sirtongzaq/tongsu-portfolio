```vue
<script setup lang="ts">
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";

const isOpen = ref(false);

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
      class="mx-auto mt-3 flex h-12 max-w-5xl items-center justify-between rounded-full border border-white/[0.08] bg-background/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5"
    >
      <!-- Logo -->
      <a href="#home" class="group flex items-center gap-2" @click="closeMenu">
        <span
          class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-400 text-[11px] font-bold text-white shadow-sm shadow-primary/20 transition-transform duration-300 group-hover:scale-105"
        >
          TS
        </span>

        <span
          class="hidden text-sm font-medium tracking-tight text-foreground sm:block"
        >
          Tongsu
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-foreground"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Desktop CTA -->
      <a
        href="#contact"
        class="hidden rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-white/5 md:block"
      >
        Let's talk
      </a>

      <!-- Mobile button -->
      <button
        type="button"
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
        class="relative flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground md:hidden"
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
        class="mx-3 mt-2 rounded-2xl border border-white/[0.08] bg-background/90 p-2 shadow-2xl shadow-black/20 backdrop-blur-2xl md:hidden"
      >
        <a
          v-for="(item, index) in navItems"
          :key="item.name"
          :href="item.href"
          class="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
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

        <div class="my-2 h-px bg-white/[0.06]" />

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
