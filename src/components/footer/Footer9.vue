<template>
  <footer
    class="position-relative pt-4 mt-6"
    style="border-top: 1px solid #dce0e5; background-color: #f8f8f8"
    data-bs-theme="light"
  >
    <div
      style="
        position: absolute;
        top: -50px;
        right: 30px;
        width: 100px;
        height: 100px;
        background-color: #574640;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      "
    >
      <svg
        fill="#ffa102"
        viewBox="0 -8 72 72"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>gavel</title>
          <path
            d="M59,27.27l-10,10a3.66,3.66,0,0,1-5.18-.07,3.7,3.7,0,0,1-.56-4.56l-4.4-4.4-3.57,3.58A3.84,3.84,0,0,1,34.17,35L18.61,50.54a3.87,3.87,0,0,1-5.48-5.48L28.68,29.52a3.91,3.91,0,0,1,4.23-.85l3.18-3.18-4.4-4.4a3.72,3.72,0,0,1-4.63-5.74l10-10A3.72,3.72,0,0,1,42.79,10L54.33,21.54A3.72,3.72,0,0,1,59,27.27Z"
          ></path>
        </g>
      </svg>
    </div>

    <b-container class="position-relative mt-5">
      <b-row class="g-4 justify-content-between pb-4">
        <b-col lg="3">
          <LogoBox className="me-0" imageClass="h-40px" />
        </b-col>

        <b-col lg="8" xxl="7">
          <b-row class="g-4">
            <b-col cols="6" md="4">
              <h6 class="mb-2 mb-md-4">Snelle links</h6>
              <ul class="nav flex-column">
                <li
                  class="nav-item mb-1"
                  v-for="(item, idx) in quickLinks"
                  :key="idx"
                >
                  <router-link
                    @click="scrollToTop"
                    class="nav-link"
                    :class="idx === 0 && 'pt-0'"
                    :to="{ name: item.link }"
                    >{{ item.name }}
                  </router-link>
                </li>
              </ul>
            </b-col>
            <b-col md="3" cols="6" class="d-lg-none d-sm-block">
              <h6 class="mb-2 mb-md-4">Volg ons op</h6>

              <ul class="list-inline mb-0 mt-3 d-flex align-items-center gap-1">
                <li
                  class="list-inline-item"
                  v-for="(item, idx) in followOnIcons"
                  :key="idx"
                >
                  <a class="btn btn-xs btn-icon btn-light" :href="item.href"
                    ><font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
                  /></a>
                </li>
              </ul>
            </b-col>
            <b-col cols="12" md="5">
              <h6 class="mb-2 mb-md-4">Complete diensten</h6>

              <div class="d-flex justify-content-md-start">
                <div
                  class="icon-md bg-body rounded-circle flex-shrink-0 flex-centered"
                >
                  <BIconTelephone class="heading-color d-inline" />
                </div>
                <div class="flex-column ps-3">
                  <p class="fw-semibold mt-1 mb-0">
                    <a
                      href="tel:+31 6 17141869"
                      class="heading-color text-primary-hover p-0"
                      >{{ contactDetails.number }}</a
                    >
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-md-start mt-4">
                <div
                  class="icon-md bg-body rounded-circle flex-shrink-0 flex-centered"
                >
                  <BIconEnvelope class="heading-color" />
                </div>
                <div class="flex-column ps-3">
                  <p class="fw-semibold mt-1 mb-0">
                    <a
                      href="mailto:info@sajuristen.nl"
                      class="heading-color text-primary-hover p-0"
                    >
                      info@sajuristen.nl</a
                    >
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-md-start mt-4">
                <div
                  class="icon-md bg-body rounded-circle flex-shrink-0 flex-centered"
                >
                  <BIconBriefcaseFill class="heading-color" />
                </div>
                <div class="flex-column ps-3">
                  <p class="fw-semibold mt-1 mb-0">
                    <a href="#" class="heading-color text-primary-hover p-0">
                      KVK: 93723792</a
                    >
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-md-start mt-4">
                <div
                  class="icon-md bg-body rounded-circle flex-shrink-0 flex-centered"
                >
                  <BIconReceipt class="heading-color" />
                </div>
                <div class="flex-column ps-3">
                  <p class="fw-semibold mt-1 mb-0">
                    <a href="#" class="heading-color text-primary-hover p-0">
                      BTW: NL866504436B01</a
                    >
                  </p>
                </div>
              </div>
              <!-- <div class="d-flex justify-content-md-start mt-4">
                <div
                  class="icon-md bg-body rounded-circle flex-shrink-0 flex-centered"
                >
                  <BIconGeoAlt class="heading-color" />
                </div>
                <div class="nav flex-column ps-3">
                  <p class="fw-semibold heading-color mt-1 mb-0">
                    Statenlaan 78
                  </p>
                  <p class="fw-semibold heading-color mt-1 mb-0">
                    5042RX Tilburg Nederland
                  </p>
                </div>
              </div> -->
            </b-col>
            <b-col md="3" cols="6" class="d-none d-lg-block">
              <h6 class="mb-2 mb-md-4">Volg ons op</h6>

              <ul class="list-inline mb-0 mt-3 d-flex align-items-center gap-1">
                <li
                  class="list-inline-item"
                  v-for="(item, idx) in followOnIcons"
                  :key="idx"
                >
                  <a class="btn btn-xs btn-icon btn-light" :href="item.href"
                    ><font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
                  /></a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts" setup>
import LogoBox from "@/components/topbar/LogoBox.vue";
//import pattern2 from "@/assets/images/decoration-pattern-2.svg";
import { quickLinks, followOnIcons } from "@/assets/data/footer-items";

import { contactDetails } from "@/assets/data/footer-items";
import {
  BIconEnvelope,
  BIconBriefcaseFill,
  BIconReceipt,
  BIconGeoAlt,
  BIconTelephone,
} from "bootstrap-icons-vue";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
