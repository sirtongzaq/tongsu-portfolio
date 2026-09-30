<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {
  RESUME_URL,
  closeResume,
  resumeOpen,
} from "../../composables/useResume";

const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeResume();
};

watch(resumeOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  if (open) window.addEventListener("keydown", onKey);
  else window.removeEventListener("keydown", onKey);
});

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKey);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150"
      leave-to-class="opacity-0"
    >
      <div
        v-if="resumeOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        @click.self="closeResume"
      >
        <div
          class="flex h-full max-h-[900px] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between gap-3 border-b border-border px-4 py-3"
          >
            <p class="text-sm font-semibold">Resume</p>
            <div class="flex items-center gap-2">
              <a
                :href="RESUME_URL"
                download="Tongsu_Resume.pdf"
                class="rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-white transition hover:bg-primary-hover"
              >
                Download PDF
              </a>
              <button
                type="button"
                aria-label="Close"
                class="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-foreground/5 hover:text-foreground"
                @click="closeResume"
              >
                ✕
              </button>
            </div>
          </div>
          <!-- Preview -->
          <iframe
            :src="`${RESUME_URL}#toolbar=0&navpanes=0`"
            title="Resume PDF"
            class="h-full w-full flex-1 bg-white"
          />
          <p class="border-t border-border px-4 py-2 text-center text-xs text-muted sm:hidden">
            Preview not showing? Tap Download PDF.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
