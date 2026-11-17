<template>
  <section class="pt-0">
    <b-container class="pb-0 pt-0 mt-0">
      <div class="inner-container-small text-center">
        <h2
          class="creative-title aos"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Onze Diensten
        </h2>
        <p
          class="mb-0 aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Onze diensten zijn beschikbaar in meerdere talen, waaronder Nederlands
          en Arabisch. Wij zorgen ervoor dat taal geen barrière is in uw
          zoektocht naar gerechtigheid.
        </p>
      </div>
      <b-row
        class="g-4 g-lg-5 mt-1 d-flex align-items-center justify-content-center"
      >
        <b-col lg="4" v-for="(blog, idx) in items" :key="idx" class="">
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import BlogCard from "@/views/demos/DigitalAgency/components/BlogCard.vue";
import { items } from "@/views/demos/DigitalAgency/data";
</script>
<style scoped>
p {
  font-size: 20px;
  color: #574640;
}
</style>
