import { ref } from "vue";

export type Theme = "dark" | "light";

const KEY = "tongsu:theme";
const theme = ref<Theme>("dark");

function apply(t: Theme) {
  theme.value = t;
  document.documentElement.dataset.theme = t;
}

// Shared state: every caller sees the same theme.
export function useTheme() {
  const init = () => {
    // index.html already set data-theme before first paint (no flash)
    const current = document.documentElement.dataset.theme;
    theme.value = current === "light" ? "light" : "dark";
  };

  const toggle = () => {
    const next: Theme = theme.value === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  return { theme, init, toggle };
}
