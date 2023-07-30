<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="ProfileCard">
    <h1 class="green">{{ name }}</h1>
    <h3>
      Network Engineer<br />
      IT Systems Administrator
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  font-family: "solaris-2", sans-serif !important;
}

h3 {
  font-size: 1.2rem;
}

.ProfileCard h1,
.ProfileCard h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .ProfileCard h1,
  .ProfileCard h3 {
    text-align: left;
  }
}
</style>
