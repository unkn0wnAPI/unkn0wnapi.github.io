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
    <h2>{{ name }}</h2>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
  background: linear-gradient(to right, #98e8c1, #7bade2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "solaris-2", sans-serif !important;
}

.ProfileCard h2 {
  text-align: center;
}

@media (max-width: 1024px) {
  .ProfileCard h2 {
    text-align: left;
  }
}
</style>
