<script setup>
import AboutItem from "./AboutItem.vue";
import AboutMeIcon from "./icons/AboutMeIcon.vue";
import SkillsIcon from "./icons/SkillsIcon.vue";
import HomelabIcon from "./icons/HomelabIcon.vue";
</script>

<template>
  <AboutItem>
    <template #icon>
      <AboutMeIcon />
    </template>
    <template #heading>About Me</template>
    Hello I am <span class="highlight">unkn0wnAPI</span> a student, tinkerer and
    IT System &amp; Network Administrator.
    <span class="highlight">I am interested in everything IT has to offer</span
    >, from software solutions to hardware experiments.
  </AboutItem>

  <AboutItem>
    <template #icon>
      <SkillsIcon />
    </template>
    <template #heading>Skills</template>
    <span class="highlight"
      >My skills center around networking and IT systems deployment</span
    >, from creating networks from scratch to preparing hardware deployment for
    specific environments. Additionally in my spare time
    <span class="highlight"
      >I write automation scripts and backend services using Python, PHP &amp;
      MySQL.</span
    >
  </AboutItem>

  <AboutItem>
    <template #icon>
      <HomelabIcon />
    </template>
    <template #heading>Homelab</template>
    Tinkering with different hardware, software &amp; environments taught me a
    thing or two, now
    <span class="highlight"
      >I use my experience to self-host my own infrastructure</span
    >, from web servers using nginx to web services using docker containers.
  </AboutItem>
</template>

<style scoped>
.highlight {
  background: linear-gradient(128deg, #98e8c1, #7bade2);
  background-clip: border-box;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
