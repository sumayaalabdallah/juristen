<template>
  <div>
    <Navbar />
    <RouterView />
    <BackToTop />
    <ButtonForContact />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BackToTop from "@/components/BackToTop.vue";
import Navbar from "@/components/navbar/BlogNavbar.vue";

import ButtonForContact from "@/components/ButtonForContact.vue";

import Footer from "@/components/footer/Footer9.vue";
</script>
