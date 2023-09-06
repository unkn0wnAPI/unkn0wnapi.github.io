<script setup>
import Element from "../components/about-page/Element.vue";
import GHLink from "../components/projects-page/GithubLink.vue";
</script>

<template>
  <main>
    <div class="projects">
      <Element>
        <template #icon>
          <img class="svg" src="../components/icons/GithubLogo.svg" alt="gh" />
        </template>
        <template #heading>SysAdmin Scripts</template>
        Personal collection of scripts made to simplify deployment and
        management of systems and services.
        <GHLink
          url="https://github.com/unkn0wnAPI/sysadmin-scripts"
          text="Open Github Repo"
          target="_blank"
        />
      </Element>
      <br />
      <Element>
        <template #icon>
          <img class="svg" src="../components/icons/GithubLogo.svg" alt="gh" />
        </template>
        <template #heading>unkn0wnapi.github.io</template>
        Source code of my github-pages site, powered by VueJS and Vue Router
        <GHLink
          url="https://github.com/unkn0wnAPI/unkn0wnapi.github.io"
          text="Open Github Repo"
          target="_blank"
        />
      </Element>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-flow: column;
}
.svg {
  width: 24px;
}
</style>
