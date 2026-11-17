<template>
  <b-collapse id="topbar-appmenu-collapse" class="navbar-collapse">
    <ul class="navbar-nav navbar-nav-scroll dropdown-hover" :class="ulClass">
      <HomePage />

      <AboutPage :menu-items="menuItems[2].children!" />

      <OurServices :menu-items="menuItems[2].children!" />
      <Tarieven />
      <NmG />
      <!-- <li v-if="router.currentRoute.value.name === 'home'" class="nav-item">
        <a class="nav-link cursor-pointer" @click="scrollToFaq">
          NmG/NGT/عربي
        </a>
      </li> -->
      <li v-if="showContactUs" class="nav-item">
        <router-link
          class="nav-link"
          :class="menuItemActive('contact', currentRouteName) && 'active'"
          :to="{ name: 'contact' }"
        >
          Contact ons
        </router-link>
      </li>
    </ul>
  </b-collapse>
</template>

<script lang="ts" setup>
import { getAppMenuItems, type MenuItemType } from "@/helpers/menu";
import HomePage from "@/components/topbar/AppMenu/HomePage.vue";
import AboutPage from "@/components/topbar/AppMenu/AboutPage.vue";
import OurServices from "@/components/topbar/AppMenu/OurServices.vue";
import Tarieven from "@/components/topbar/AppMenu/Tarieven.vue";
import NmG from "@/components/topbar/AppMenu/NmG.vue";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";
import router from "@/router";
type AppMenuProps = {
  showContactUs?: boolean;
  ulClass?: string;
};
const menuItems: MenuItemType[] = getAppMenuItems();

defineProps<AppMenuProps>();
const currentRouteName = router.currentRoute.value.name;
function scrollToFaq() {
  setTimeout(() => {
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}
</script>
