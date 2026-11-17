<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px position-relative pb-0 mb-0"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center flex-column text-center z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Verjaringstermijnen
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Afhankelijk van het soort ongeval gelden er verjaringstermijnen
          waarbinnen een schadeclaim ingediend moet worden. Als een
          aansprakelijkstelling pas na deze termijn wordt verzonden aan de
          betrokken persoon of verzekeraar, is de kans groot dat de claim wordt
          afgewezen of niet in behandeling wordt genomen.
        </p>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-9 flex-sm-fill btns"
      >
        <router-link
          class="btn btn-6 bg-primary text-white btn-lg btn-white icon-link icon-link-hover mb-0 px-3 aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          :to="{ name: 'contact' }"
          @click="scrollToTop"
        >
          Neem gratis contact met ons op
        </router-link>
      </div>
    </b-card>
    <b-container class="mb-6 mt-0 pt-0">
      <b-row class="mt-0 d-flex justify-content-center">
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              <span class="dropcap bg-transparent rounded px-2 mb-1">D</span>
              e eerste verjaringstermijn waar men bij letselschadezaken rekening
              mee moet houden, is drie jaar (in de regel na datum ongeval).
              Daarna geldt de termijn van vijf jaar (in de regel na datum
              ongeval). Ons advies is daarom om altijd binnen drie jaar na een
              ongeval contact op te nemen met een jurist of advocaat. Mocht deze
              driejarige termijn al verstreken zijn en wilt u toch een partij
              aansprakelijk stellen voor de opgelopen schade, neem dan gerust
              contact met ons op. We kijken samen met u welke situatie op u van
              toepassing is en welke verjaringstermijn geldt. In veel gevallen
              zijn er namelijk nog mogelijkheden binnen de vijfjarentermijn.
            </p>
          </b-card>
        </b-col>

        <b-col lg="12">
          <b-card
            style="
              background-color: #574640;
              position: relative;
              color: #fff;
              padding: 10px;
            "
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="color: #fff" class="pb-7">
              Het kan oneerlijk voelen wanneer men de veroorzaker niet meer
              aansprakelijk kan stellen voor de schade die hij heeft
              veroorzaakt. Dit is echter in de Nederlandse wetgeving vastgelegd
              in het kader van de rechtszekerheid. Ook de partij die het ongeval
              heeft veroorzaakt -meestal niet met opzet- moet weten wat hij kan
              verwachten.
            </p>
            <img
              style="position: absolute; bottom: 0; left: 0"
              src="@/assets/images/banner-shape.png"
              alt="banner-shape"
            />
          </b-card>
        </b-col>

        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Daarnaast kent de Nederlandse wet het begrip 'stuiting', waardoor
              de verjaringstermijn verlengd kan worden door middel van een
              stuitingsbrief. Het probleem is echter dat niet iedereen hiermee
              Daarnaast kent de Nederlandse wet het begrip 'stuiting', waardoor
              de verjaringstermijn verlengd kan worden door middel van een
              stuitingsbrief. Het probleem is echter dat niet iedereen hiermee
              bekend is, waardoor het mogelijk is dat iemand hier pas achteraf,
              wanneer de termijn al verstreken is, achter komt.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Letselschade/Verjaringstermijnen HERO.jpg";

import { onMounted } from "vue";
import { jarallax } from "jarallax";
import AOS from "aos";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
onMounted(() => {
  jarallax(document.querySelectorAll(".bg-parallax"), {
    speed: 0.4,
  });
  AOS.init({ once: true });
});
</script>
<style scoped>
p {
  font-size: 20px;
  color: #574640;
}
.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -65px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 12rem !important;
  }
  .title {
    margin-top: -50px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  p {
    font-size: 15px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 10rem !important;
  }
  p {
    font-size: 13px !important;
  }
  .title {
    margin-top: -50px !important;
  }
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -25% !important;
  }
  h3 {
    font-size: 19px;
  }
  p {
    font-size: 12px;
  }
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
  .btn-6 {
    font-size: 11px !important;
  }
}
@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 67% !important;
  }
}
</style>
