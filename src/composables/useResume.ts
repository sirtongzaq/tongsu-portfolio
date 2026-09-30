import { ref } from "vue";

// Shared state so any button (Navbar, Hero) can open the same modal.
export const RESUME_URL = "/Tongsu_Resume.pdf";
export const resumeOpen = ref(false);
export const openResume = () => {
  resumeOpen.value = true;
};
export const closeResume = () => {
  resumeOpen.value = false;
};
