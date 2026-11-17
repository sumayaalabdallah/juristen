<template>
  <main>
    <Hero />
    <OnzeDiensten />
    <Steps />
    <OnsTeam />
    <JuridischeTips />

    <CTA />
  </main>
</template>
<script lang="ts" setup>
import Hero from "@/views/demos/DigitalAgency/components/Hero.vue";
import Steps from "@/views/demos/DigitalAgency/components/Steps.vue";
import OnzeDiensten from "@/views/demos/DigitalAgency/components/OnzeDiensten.vue";
import OnsTeam from "@/views/demos/DigitalAgency/components/OnsTeam.vue";
import JuridischeTips from "@/views/demos/DigitalAgency/components/JuridischeTips.vue";
import CTA from "@/views/demos/DigitalAgency/components/CTA.vue";

import { ref } from "vue";
const faq = ref(true);
</script>
