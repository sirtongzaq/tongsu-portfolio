<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";

import HeroSection from "./components/sections/HeroSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
import ExperienceSection from "./components/sections/ExperienceSection.vue";
import EducationSection from "./components/sections/EducationSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";

import ScrollNavigator from "./components/common/ScrollNavigator.vue";
import ResumeModal from "./components/common/ResumeModal.vue";
</script>

<template>
  <Navbar />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <Footer />

  <ScrollNavigator />
  <ResumeModal />
</template>
