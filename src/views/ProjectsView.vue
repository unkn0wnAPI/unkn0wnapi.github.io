<script setup>
import ProjectItem from "../components/AboutItem.vue";
import GithubLink from "../components/ProjectGithubLink.vue";
</script>

<template>
  <main>
    <div class="projects">
      <ProjectItem>
        <template #icon>
          <img class="svg" src="../components/icons/GithubLogo.svg" alt="gh" />
        </template>
        <template #heading>SysAdmin Scripts</template>
        Personal collection of scripts made to simplify deployment and
        management of systems and services.
        <GithubLink
          url="https://github.com/unkn0wnAPI/sysadmin-scripts"
          text="Open Github Repo"
          target="_blank"
        />
      </ProjectItem>
      <br />
      <ProjectItem>
        <template #icon>
          <img class="svg" src="../components/icons/GithubLogo.svg" alt="gh" />
        </template>
        <template #heading>unkn0wnapi.github.io</template>
        Source code of my github-pages site, powered by VueJS and Vue Router
        <GithubLink
          url="https://github.com/unkn0wnAPI/unkn0wnapi.github.io"
          text="Open Github Repo"
          target="_blank"
        />
      </ProjectItem>
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
