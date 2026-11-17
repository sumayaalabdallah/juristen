<template>
  <li class="nav-item dropdown">
    <router-link
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      :class="menuItemActive('tarieven', currentRouteName) && 'active'"
      :to="{ name: 'tarieven' }"
    >
      Tarieven
    </router-link>
  </li>
</template>
<script lang="ts" setup>
import router from "@/router";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";
import { getAppMenuItems } from "@/helpers/menu";

const currentRouteName = router.currentRoute.value.name;

const menuItems =
  getAppMenuItems().find((item) => item.key === "tarieven")?.children || [];
</script>
