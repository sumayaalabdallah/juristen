<template>
  <StickyHeader className="header-absolute" data-bs-theme="light">
    <nav class="navbar navbar-expand-xl bg-light px-lg-5" data-bs-theme="light">
      <b-container>
        <LogoBox class-name="me-5" />

        <AppMenu showContactUs ul-class="mx-auto" @click="scrollToTop" />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <!-- <ThemeToggleDropdown /> -->
          <!-- <LanguageDropdown /> -->

          <li class="nav-item d-none d-sm-block d-flex gap-3">
            <a
              class="btn btn-sm btn-primary mb-0 styled-button"
              href="tel:+31617141869"
            >
              +316 171 418 69
            </a>
          </li>
          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import StickyHeader from "@/components/topbar/StickyHeader.vue";
import LogoBox from "@/components/topbar/LogoBox.vue";
import ThemeToggleDropdown from "@/components/topbar/ThemeToggleDropdown.vue";
import MobileNavbarToggler from "@/components/topbar/MobileNavbarToggler.vue";
import { BIconSearch } from "bootstrap-icons-vue";
import AppMenu from "@/components/topbar/AppMenu/index.vue";
import { followOnIcons } from "@/assets/data/footer-items";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
.styled-button {
  background-color: transparent;
  border: 1px solid #ffa102;
  color: #ffa102;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #ffa102;
  border: transparent;
}

/* .nav-item.d-flex.gap-3 {
  gap: 1rem;
} */
</style>
