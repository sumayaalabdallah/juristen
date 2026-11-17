<template>
  <b-card
    no-body
    class="card-img-scale bg-body overflow-hidden border border-primary aos"
    data-aos="fade-up"
    data-aos-delay="20"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
    style="height: 500px"
  >
    <div class="card-img-scale-wrapper">
      <img :src="blog.image" class="card-img-top img-scale" alt="service img" />
    </div>
    <b-card-body class="p-4">
      <h6>
        <router-link @click="scrollToTop" v-if="blog.route" :to="blog.route">{{
          blog.title
        }}</router-link>
      </h6>
      <p class="mb-0">{{ blog.description }}</p>
    </b-card-body>
    <div class="card-footer border-top border-primary bg-body p-3">
      <router-link
        @click="scrollToTop"
        v-if="blog.route"
        class="icon-link icon-link-hover stretched-link p-0 m-0"
        :to="blog.route"
      >
        Lees meer

        <BIconArrowRight class="bi" />
      </router-link>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { BlogType } from "@/types";
import type { PropType } from "vue";
import { BIconArrowRight } from "bootstrap-icons-vue";

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true,
  },
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
p {
  font-size: 17px;
  color: #574640;
}
</style>
