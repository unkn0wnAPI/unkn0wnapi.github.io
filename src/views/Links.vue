<script setup>
import Link from "../components/links-page/LinkElement.vue";
</script>

<template>
  <main>
    <div class="links">
      <Link url="https://github.com/unkn0wnAPI" text="Github Account">
        <template #icon>
          <img class="svg" src="../components/icons/GithubLogo.svg" alt="gh" />
        </template>
      </Link>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .links {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.links {
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
