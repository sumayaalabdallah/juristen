<template>
  <section class="pt-0 pb-6">
    <div class="inner-container-small text-center pb-4">
      <h2
        class="creative-title aos"
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        Neem contact met ons op
      </h2>
      <p
        class="mb-0 aos"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        Heeft u een juridische vraag? Wij staan voor u klaar.
      </p>
      <p
        class="mb-0 aos"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        Neem vandaag nog vrijblijvend contact met ons op via:
      </p>
    </div>
    <b-container fluid class="p-0 mt-0">
      <div
        class="bg-primary d-sm-flex flex-sm-wrap align-items-center justify-content-center gap-5 p-4 aos"
        data-aos="fade-down"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <ul
          class="avatar-group mb-ms-0 d-flex justify-content-space-between align-items-center gap-3"
        >
          <li class="avatar avatar-sm">
            <div
              style="background-color: #574640"
              class="avatar-img rounded-circle"
            >
              <BIconTelephone
                class="text-white position-absolute top-50 start-50 translate-middle"
              ></BIconTelephone>
            </div>
          </li>
          <li>
            <p class="fw-normal mb-0">
              Telefoon:
              <a href="tel:+31 6 17141869" class="fw-semibold"
                >+31 6 17141869</a
              >
            </p>
          </li>
        </ul>
        <ul
          class="avatar-group mb-ms-0 d-flex justify-content-space-between align-items-center gap-3"
        >
          <li class="avatar avatar-sm">
            <div
              style="background-color: #574640"
              class="avatar-img rounded-circle"
            >
              <BIconEnvelope
                class="text-white position-absolute top-50 start-50 translate-middle"
              ></BIconEnvelope>
            </div>
          </li>
          <li>
            <p class="fw-normal mb-0">
              E-mail:
              <a href="mailto:info@sajuristen.nl" class="fw-semibold"
                >info@sajuristen.nl</a
              >
            </p>
          </li>
        </ul>
        <ul
          class="avatar-group mb-ms-0 d-flex justify-content-space-between align-items-center gap-3"
        >
          <li class="avatar avatar-sm">
            <div
              style="background-color: #574640"
              class="avatar-img rounded-circle"
            >
              <BIconFolderMinus
                class="text-white position-absolute top-50 start-50 translate-middle"
              ></BIconFolderMinus>
            </div>
          </li>
          <li>
            <p class="fw-normal mb-0">
              <router-link
                @click="scrollToTop"
                :to="{ name: 'contact' }"
                class="fw-semibold"
              >
                Online contactformulier
              </router-link>
            </p>
          </li>
        </ul>
      </div>
    </b-container>
    <b-container class="mt-4 text-center">
      <p
        class="aos"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        Onze diensten zijn beschikbaar in meerdere talen, waaronder Nederlands
        en Arabisch. Wij zorgen ervoor dat taal geen barrière is in uw zoektocht
        naar gerechtigheid.
      </p>
      <p
        class="text-primary aos"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        style="font-weight: 800"
      >
        Wij kijken ernaar uit om u te helpen!
      </p>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import {
  BIconTelephone,
  BIconEnvelope,
  BIconFolderMinus,
} from "bootstrap-icons-vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
ul li {
  list-style: none;
}
p,
a {
  font-size: 20px;
  color: #574640;
}
</style>
