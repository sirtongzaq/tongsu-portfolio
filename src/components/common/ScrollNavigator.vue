```vue
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const sections = [
  { id: "home", label: "Scroll to explore", target: "about" },
  { id: "about", label: "Scroll to explore", target: "skills" },
  { id: "skills", label: "Scroll to explore", target: "experience" },
  { id: "experience", label: "Scroll to explore", target: "projects" },
  { id: "projects", label: "Scroll to explore", target: "contact" },
  { id: "contact", label: "Scroll to top", target: "home" },
];

const activeSection = ref("home");

const currentNavigation = computed(() => {
  return (
    sections.find((section) => section.id === activeSection.value) ??
    sections[0]
  );
});

const isAtBottom = computed(() => {
  return activeSection.value === "contact";
});

const scrollToTarget = () => {
  const target = document.getElementById(currentNavigation.value.target);

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const updateActiveSection = () => {
  const viewportCenter = window.innerHeight / 2;

  let closestSection = sections[0];
  let closestDistance = Infinity;

  for (const section of sections) {
    const element = document.getElementById(section.id);

    if (!element) continue;

    const rect = element.getBoundingClientRect();

    const sectionCenter = rect.top + rect.height / 2;

    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
    }
  }

  activeSection.value = closestSection.id;
};

onMounted(() => {
  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, { passive: true });

  window.addEventListener("resize", updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);

  window.removeEventListener("resize", updateActiveSection);
});
</script>

<template>
  <button
    type="button"
    @click="scrollToTarget"
    class="group fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-all duration-300 hover:text-foreground sm:flex"
    :aria-label="currentNavigation.label"
  >
    <span :key="currentNavigation.label" class="animate-fade-in">
      {{ currentNavigation.label }}
    </span>

    <span
      class="flex h-8 w-5 items-start justify-center rounded-full border border-border bg-background/60 p-1 backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10"
    >
      <span
        v-if="!isAtBottom"
        class="h-1.5 w-1.5 rounded-full bg-primary animate-scroll"
      />

      <span
        v-else
        class="mt-0.5 text-[10px] leading-none text-primary animate-bounce"
      >
        ↑
      </span>
    </span>
  </button>
</template>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-scroll {
    animation: none;
  }
}
</style>
