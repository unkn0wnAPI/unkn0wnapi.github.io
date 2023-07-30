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
    Hi! I'm Jakub. Your average linux user, interested in computer science and
    programming (although the latter one is only a hobby for me)
  </AboutItem>

  <AboutItem>
    <template #icon>
      <SkillsIcon />
    </template>
    <template #heading>Skills</template>
    My skills center around IT System & Network Administration (from
    hardware/software deployment to network configuration and administration).
    <br />When it comes to programming, I mostly use Python, PHP and MySQL
  </AboutItem>

  <AboutItem>
    <template #icon>
      <HomelabIcon />
    </template>
    <template #heading>Homelab</template>
    As an average tinkerer, In my spare time I experiment with server, services
    and other network appliances. <br />I am using my knowledge from these
    experiments to self-host and manage web server, services and game servers
    (like nginx, jellyfin, etc.) using docker containers.
  </AboutItem>
</template>
