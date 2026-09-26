<template>
  <nav
    class="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#home" class="text-lg font-bold">
        Tongsu<span class="text-primary">.</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          href="#about"
          class="text-sm text-muted transition hover:text-foreground"
        >
          About
        </a>

        <a
          href="#skills"
          class="text-sm text-muted transition hover:text-foreground"
        >
          Skills
        </a>

        <a
          href="#projects"
          class="text-sm text-muted transition hover:text-foreground"
        >
          Projects
        </a>

        <a
          href="#contact"
          class="text-sm text-muted transition hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>
