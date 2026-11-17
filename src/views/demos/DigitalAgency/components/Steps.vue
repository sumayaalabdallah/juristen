<template>
  <section class="pt-0 section">
    <b-container>
      <div class="text-center mb-5">
        <h4
          class="creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Waarom kiezen voor S&A Juristen?
        </h4>
      </div>

      <b-row
        class="step-process d-flex align-items-center justify-content-center"
      >
        <b-col lg="4" class="step" v-for="(blog, idx) in steps" :key="idx">
          <StepCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { steps } from "@/views/demos/DigitalAgency/data";
import StepCard from "@/views/demos/DigitalAgency/components/StepCard.vue";
</script>
<style scoped>
@media (max-width: 500px) {
  .step {
    margin: 1px 1rem !important;
  }
  .section {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
}
</style>
