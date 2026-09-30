<script setup lang="ts">
import { iconFor } from "../../data/skills";

withDefaults(
  defineProps<{
    items: string[];
    /** seconds for one full loop */
    duration?: number;
    reverse?: boolean;
  }>(),
  { duration: 22, reverse: false },
);
</script>

<template>
  <div class="marquee" :style="{ '--dur': `${duration}s` }">
    <div class="track" :class="{ reverse }">
      <!-- second group is a copy for the seamless loop -->
      <ul
        v-for="copy in 2"
        :key="copy"
        class="group"
        :class="{ copy: copy === 2 }"
        :aria-hidden="copy === 2 ? 'true' : undefined"
      >
        <li v-for="name in items" :key="name" class="chip">
          <span class="chip-icon">{{ iconFor(name) }}</span>
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 8%,
    black 92%,
    transparent
  );
}

.track {
  display: flex;
  width: max-content;
  animation: scroll var(--dur) linear infinite;
}
.track.reverse {
  animation-direction: reverse;
}
.marquee:hover .track {
  animation-play-state: paused;
}

.group {
  display: flex;
  gap: 0.5rem;
  padding-right: 0.5rem; /* keeps the gap between the two copies */
  margin: 0;
  list-style: none;
}

.chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  border: 1px solid var(--color-border);
  border-radius: 0.625rem;
  background: var(--color-background);
  padding: 0.3rem 0.65rem 0.3rem 0.3rem;
  font-size: 0.75rem;
  color: var(--color-muted);
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}
.chip:hover {
  border-color: var(--color-primary);
  color: var(--color-foreground);
}

.chip-icon {
  display: flex;
  height: 1.5rem;
  min-width: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background: color-mix(in srgb, var(--color-primary) 15%, transparent);
  color: var(--color-primary);
  font-size: 0.7rem;
  font-weight: 700;
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    mask-image: none;
  }
  .track {
    animation: none;
    width: auto;
  }
  .group {
    flex-wrap: wrap;
  }
  .copy {
    display: none;
  }
}
</style>
