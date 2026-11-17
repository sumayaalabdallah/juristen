<template>
  <b-container class="mb-6">
    <b-row
      class="g-4 g-lg-5 mt-1 d-flex align-items-center justify-content-center"
    >
      <b-col lg="4" v-for="(blog, idx) in items" :key="idx" class="">
        <BlogCard :blog="blog" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import BlogCard from "@/views/pages/about/About/components/BlogCard.vue";
import { items } from "@/views/pages/about/data";
</script>
<style scoped>
.section {
  padding: 2em;
  background: #f8f8f8;
}
</style>
