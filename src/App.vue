<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfileCard from "./components/ProfileCard.vue";
</script>

<template>
  <header>
    <img
      alt="profilePicture"
      class="profilePicture"
      src="https://avatars.githubusercontent.com/u/34425939"
      width="256"
      height="256"
    />
    <div class="wrapper">
      <ProfileCard name="unkn0wnAPI" />
      <nav>
        <RouterLink to="/">Start</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/links">Links</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.4;
  max-height: 100vh;
}

.profilePicture {
  display: block;
  margin: 0 auto 2rem;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}

nav {
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  font-family: "Solaris-2";
}

nav a.router-link-exact-active {
  color: #078d70;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .profilePicture {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
