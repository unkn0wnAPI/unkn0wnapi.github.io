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
  target: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="link">
    <a :href="url" :target="target">{{ text }}</a>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  font-size: 1rem;
  font-family: "solaris-2", sans-serif !important;
  /* text-align: right; */
  text-decoration: underline;
  display: block;
}
</style>
