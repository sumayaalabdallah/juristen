<template>
  <li class="nav-item dropdown">
    <router-link
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      :class="menuItemActive('demos', currentRouteName) && 'active'"
      :to="{ name: 'home' }"
    >
      Startpagina
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import router from "@/router";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";

const currentRouteName = router.currentRoute.value.name;
</script>
