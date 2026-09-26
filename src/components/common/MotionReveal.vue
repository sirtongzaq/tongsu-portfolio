<script setup lang="ts">

import { motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    delay?: number;
    y?: number;
    duration?: number;
  }>(),
  { delay: 0, y: 24, duration: 0.6 },
);
</script>
<template>
  <motion.div
    :initial="{ opacity: 0, y }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration, delay, ease: [0.22, 1, 0.36, 1] }"
    :inViewOptions="{ once: true, amount: 0.15 }"
  >
    <slot />
  </motion.div>
</template>
