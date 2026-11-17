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
          Bestuursrecht
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
      <b-row class="mt-0 pt-0">
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
              <span class="dropcap bg-transparent rounded px-2 mb-1">M</span>

              et betrekking tot bestuursrechtelijke vraagstukken behandelen wij
              voornamelijk onterecht opgelegde boetes. Daarnaast hebben wij
              regelmatig bezwaarschriften gegrond laten verklaren, bijvoorbeeld
              bij terugvordering van toeslagen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Heeft u te maken met een boete of een besluit van de overheid
                waar u het niet mee eens bent? Wij staan voor u klaar om u te
                helpen en uw rechten te beschermen. Met onze kennis van het
                bestuursrecht begeleiden wij u stap voor stap, zodat u sterk
                staat tegenover de overheid.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0; height: 85px"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 mt-5 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              Heeft u onterecht een boete opgelegd gekregen?
            </h5>
            <p>
              Het is van groot belang om zo spoedig mogelijk na de ontvangst van
              een onterechte boete of naheffing juridische hulp in te schakelen.
              In deze gevallen geldt namelijk een bezwaartermijn waarbinnen
              contact met het bestuursorgaan moet worden opgenomen. Indien dit
              pas na deze termijn gebeurt, zult u in de meeste gevallen
              niet-ontvankelijk worden verklaard. Ook is het essentieel dat u de
              juiste aanvullende documenten, zoals foto’s of afschriften van
              apps, beschikbaar heeft. Wij bieden deskundig advies en begeleiden
              u bij het indienen van bezwaar en, indien nodig, beroep tegen
              besluiten van de overheid.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Bestuursrechtelijke kwesties kunnen complex en ingrijpend zijn.
                Overheidsinstanties hanteren strikte regels en termijnen,
                waardoor het cruciaal is om snel en adequaat te handelen. Wij
                staan zowel particulieren als ondernemers bij in
                bestuursrechtelijke procedures. Met onze uitgebreide kennis van
                wet- en regelgeving zorgen wij ervoor dat uw rechten optimaal
                worden behartigd.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0; height: 85px"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 mt-5 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              Individuen
            </h5>
            <p>
              Wij ondersteunen individuen, zowel particulieren als ondernemers,
              bij geschillen met overheidsinstanties, zoals parkeerboetes of
              naheffingen van de Belastingdienst. Wij helpen u bij het
              analyseren van het besluit, het opstellen van een goed onderbouwd
              bezwaarschrift en het voeren van verdere juridische procedures
              indien nodig.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                Kosten
              </h5>
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                In veel gevallen kunnen wij u kosteloos bijstaan, omdat de
                juridische kosten bij een gegrond verklaard bezwaar verhaald
                kunnen worden. Wij zorgen altijd voor transparantie over de
                kosten, zodat u precies weet waar u aan toe bent.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0; height: 85px"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 mt-5 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              Wat kunt u zelf doen?
            </h5>
            <p>
              Om uw kansen op een succesvol bezwaar te vergroten, is het
              verstandig om direct na ontvangst van de boete of naheffing de
              volgende stappen te ondernemen:
            </p>
            <ul>
              <li>Bewaar alle relevante documenten en correspondentie.</li>
              <li>
                Maak, indien mogelijk, foto’s die uw standpunt ondersteunen.
              </li>
              <li>Noteer belangrijke deadlines en termijnen.</li>
            </ul>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="mb-5 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Door proactief te handelen en tijdig de juiste ondersteuning in
                te schakelen, vergroot u de kans op een succesvolle uitkomst.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0; height: 85px"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mt-3">
          <router-link
            :to="{ name: 'boetes-en-naheffingen' }"
            @click="scrollToTop"
          >
            <div
              class="card2 card-hover-shadow border aos"
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <div class="p-5">
                <p tag="h6">
                  Boetes en naheffingen: Wat te doen bij een boete of naheffing?
                </p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col lg="6" class="mt-3">
          <router-link
            :to="{ name: 'wat-te-doen-bij-een-boete-of-naheffing' }"
            @click="scrollToTop"
          >
            <div
              class="card2 card-hover-shadow border aos"
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <div class="p-5">
                <p tag="h6">Wat te doen bij een boete of naheffing?</p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col lg="12" class="mt-3">
          <router-link
            :to="{ name: 'wat-zijn-de-gevolgen-van-een-boete-of-naheffing' }"
            @click="scrollToTop"
          >
            <div
              class="card2 card-hover-shadow border aos"
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <div class="p-5">
                <p tag="h6">Wat zijn de gevolgen van een boete of naheffing?</p>
              </div>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Bestuursrecht hero.jpg";

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
p,
ul li {
  font-size: 20px;
  color: #574640;
}

span {
  color: #574640;
}
h5 {
  color: #ffa102 !important;
}
.card2 {
  width: 100%;
  height: 130px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
}
.card2:hover {
  cursor: pointer;
  background-color: #ffa20265 !important;
  transition: 0.2s ease;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2) !important;
}
img {
  height: 250px;
  width: 100%;
}

.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
}
@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: 0% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 15px;
  }
  .btns {
    align-items: start !important;
    margin-top: 64% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card2 {
    width: 100%;
    margin: 10px 0;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}
</style>
