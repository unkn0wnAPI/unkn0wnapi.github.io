<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="link">
    <a :href="url" target="_blank">{{ text }}</a>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  font-size: 1rem;
  font-family: "solaris-2", sans-serif !important;
  text-align: center;
  text-decoration: underline;
}
</style>
