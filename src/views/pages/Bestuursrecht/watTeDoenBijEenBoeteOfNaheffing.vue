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
          class="display-4 fs-1 text-white creative-title aos w-75"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Wat te doen bij een boete of naheffing?
        </h3>
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
        <b-col lg="12">
          <b-card
            no-body
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              <span class="dropcap bg-transparent rounded px-2 mb-1">A</span>
              ls u een boete of naheffing ontvangt, is het belangrijk om niet
              meteen te betalen, maar eerst goed te onderzoeken of de boete of
              naheffing terecht is. Volg deze stappen:
            </p>
          </b-card>
        </b-col>

        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                1. Controleer de boete of naheffing
              </h5>
              <p tag="h6">
                Controleer of de boete of naheffing klopt. Is er sprake van een
                fout in de berekening of een misverstand? Het kan bijvoorbeeld
                zijn dat een betaling niet goed is geregistreerd of dat er
                onterecht een boete is opgelegd.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">2. Begrijp de reden</h5>
              <p tag="h6">
                Zorg ervoor dat u begrijpt waarom de boete of naheffing is
                opgelegd. Vaak wordt dit duidelijk uitgelegd in de brief die u
                heeft ontvangen van de instantie die de boete heeft opgelegd.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card4 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                3. Indien nodig bezwaar maken
              </h5>
              <p tag="h6">
                Als u het niet eens bent met de boete of naheffing, kunt u
                bezwaar maken. Dit kan schriftelijk of digitaal, afhankelijk van
                de instantie die de boete heeft opgelegd. In veel gevallen kunt
                u bezwaar maken binnen zes weken na de datum van de beslissing
                of naheffing. Zorg ervoor dat u in uw bezwaar duidelijk aangeeft
                waarom u van mening bent dat de boete of naheffing onterecht is.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card4 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                4. Juridische bijstand inschakelen
              </h5>
              <p tag="h6">
                Als u er niet uitkomt met de instantie die de boete heeft
                opgelegd of als het bezwaar niet succesvol is, kan het nuttig
                zijn om juridische bijstand in te schakelen. Een jurist kan u
                helpen om de zaak verder te beoordelen, het bezwaar te
                formuleren of zelfs een procedure bij de rechtbank te starten.
                Wij adviseren daarbij wel om zo vroeg mogelijk een jurist in te
                schakelen, wanneer een procedure bij de rechtbank gestart moet
                worden komen moet hiervoor namelijk altijd griffierecht betaald
                worden wat bij een ongegrond beroep niet teruggevorderd kan
                worden.
              </p>
            </div>
          </div>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Wat te doen.jpg";

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
.card3 {
  width: 100%;
  height: 250px;
  margin: 10px 0;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  color: #f8f8f8;

  border-radius: 10px;
}
.card4 {
  width: 100%;
  height: 420px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  border-radius: 10px;
  color: #f8f8f8;
}

p {
  font-size: 20px;
  color: #574640;
}
h6 {
  color: #ffa102;
}
.card3 p,
.card4 p {
  color: #fff;
}

.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -80px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .card4 {
    height: 500px;
  }
}
@media (max-width: 820px) {
  .card4 {
    height: 100%;
  }
}
@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -25% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }

  .card3 {
    height: 220px;
    margin-bottom: 10px;
  }
  .card4 {
    height: 350px;
    margin-bottom: 10px;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 66% !important;
  }
}
</style>
