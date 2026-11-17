<template>
  <b-row class="gy-1 gy-md-5 mt-0 d-flex justify-content-center">
    <b-col lg="12" v-for="(service, idx) in items" :key="idx">
      <b-card
        no-body
        class="h-100 card aos mt-0"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
          {{ service.title }}
        </h5>
        <p>{{ service.description }}</p>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { items } from "@/views/pages/Letselschade/wat te doen na een verkeersongeva/data";
</script>
<style scoped></style>
