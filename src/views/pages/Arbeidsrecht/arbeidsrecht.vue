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
          Arbeidsrecht
        </h3>
        <p
          class="text-white aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Ondersteuning bij geschillen met uw werkgever of werknemer.
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
      <b-row
        class="g-4 g-lg-5 mt-0 pt-0 d-flex align-items-center justify-content-center"
      >
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
              <span class="dropcap bg-transparent rounded px-2 mb-1">H</span>
              eeft u een conflict met uw werkgever, zoals een onterecht gegeven
              ontslag, een discussie over de arbeidsvoorwaarden, een geschil
              waarbij de werkgever het contract wenst te beëindigen door middel
              van een vaststellingsovereenkomst (VSO) of problemen met de
              betaling van uw loon? Wij begrijpen hoe belangrijk uw werk en
              inkomen voor u zijn. Met onze kennis van het arbeidsrecht staan
              wij aan uw zijde om uw rechten te beschermen. Of het nu gaat om
              onderhandelingen bij de totstandkoming van een
              vaststellingsovereenkomst of verdere juridische bijstand, wij
              helpen u om tot de beste oplossing te komen. Samen zorgen we
              ervoor dat uw belangen centraal staan.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              color: #fff;
              position: relative;
              padding: 10px;
            "
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                Heeft u een juridisch geschil op het gebied van arbeidsrecht?
              </h5>
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Het is van groot belang om in een zo vroeg mogelijk stadium
                juridische hulp in te schakelen wanneer zich problemen op de
                werkvloer voordoen. In deze beginfase kan zelfs kortstondig
                contact met een jurist al een wereld van verschil maken. Wij
                bieden dan ook de mogelijkheid voor het gratis inwinnen van
                korte juridische vraag stukken.
              </p>
              <img
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 85px;
                  width: 100%;
                "
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>

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
              Daarnaast streven wij ernaar om escalatie te voorkomen en proberen
              wij het geschil via gedegen advies en eventuele onderhandelingen
              in goede banen te leiden, zonder direct een gerechtelijke
              procedure op te starten. Mocht een procedure toch noodzakelijk
              zijn, dan zullen wij u hier uiteraard volledig in bijstaan en
              adviseren.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              color: #fff;
              position: relative;
              padding: 10px;
            "
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
                Arbeidszaken zijn vaak ingrijpend en meestal bestaat de wens om
                er gezamenlijk uit te komen of in ieder geval om de-escalerend
                op te treden. Echter, er kunnen op diverse gebieden problemen of
                onduidelijkheden ontstaan of dreigen te ontstaan. Wij staan
                zowel werkgevers als werknemers bij om arbeidszaken op een
                juiste en eerlijke manier af te handelen. Doordat wij ervaring
                hebben met beide partijen, kunnen wij u op een praktische en
                oplossingsgerichte manier adviseren en ondersteunen, altijd met
                oog voor uw belangen.
              </p>
              <img
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 85px;
                  width: 100%;
                "
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              Voor werknemers
            </h5>
            <p>
              Wij ondersteunen werknemers bij (mogelijke) arbeidsconflicten met
              hun werkgever. In veel gevallen is er al sprake van een gespannen
              sfeer op de werkvloer of heeft de werknemer een
              vaststellingsovereenkomst van de werkgever ontvangen. Wij bieden
              juridisch advies en begeleiding om uw rechten te beschermen en tot
              een passende oplossing te komen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              color: #fff;
              position: relative;
              padding: 10px;
            "
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                Voor kleine ondernemingen
              </h5>
              <p
                style="color: #fff"
                class="pb-8 aos"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Wij bieden juridische ondersteuning aan kleine bedrijven,
                non-profitorganisaties en andere werkgevers bij (mogelijke)
                arbeidsconflicten met een werknemer. Ons doel is om samen tot de
                beste oplossing te komen en de juridische risico's te
                minimaliseren.
              </p>
              <img
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 85px;
                  width: 100%;
                "
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              Kosten
            </h5>
            <p>
              In de meeste gevallen kunnen wij werknemers kosteloos bijstaan,
              omdat de juridische kosten doorgaans op de werkgever verhaald
              kunnen worden.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              color: #fff;
              position: relative;
              padding: 10px;
            "
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
                Voor ondernemingen worden kosten in rekening gebracht; deze zijn
                afhankelijk van de aard en complexiteit van de rechtsvraag. Wij
                zorgen altijd voor transparantie over de kosten, zodat u weet
                waar u aan toe bent.
              </p>
              <img
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 85px;
                  width: 100%;
                "
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="5">
          <b-card
            no-body
            class="card-img-scale bg-body overflow-hidden border border-primary aos"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="card-img-scale-wrapper">
              <img
                :src="img1"
                loading="lazy"
                alt="blog-img"
                class="card-img-top img-scale"
              />
            </div>
            <b-card-body class="p-4">
              <h6>
                <router-link
                  @click="scrollToTop"
                  :to="{ name: 'vaststellingsovereenkomst' }"
                >
                  Vaststellingsovereenkomst: Wat is het en wat zijn de
                  mogelijkheden?
                </router-link>
              </h6>
            </b-card-body>
            <div class="card-footer border-top border-primary bg-body p-3">
              <router-link
                @click="scrollToTop"
                class="icon-link icon-link-hover stretched-link p-0 m-0"
                :to="{ name: 'vaststellingsovereenkomst' }"
              >
                Lees meer

                <BIconArrowRight class="bi" />
              </router-link>
            </div>
          </b-card>
        </b-col>

        <b-col lg="5">
          <b-card
            no-body
            class="card-img-scale bg-body overflow-hidden border border-primary aos"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="card-img-scale-wrapper">
              <img
                :src="img2"
                loading="lazy"
                alt="blog-img"
                class="card-img-top img-scale"
              />
            </div>
            <b-card-body class="p-4">
              <h6>
                <router-link
                  @click="scrollToTop"
                  :to="{ name: 'loonvordering' }"
                >
                  Loonvordering: Wat te doen als u loon niet ontvangt?
                </router-link>
              </h6>
            </b-card-body>
            <div class="card-footer border-top border-primary bg-body p-3">
              <router-link
                @click="scrollToTop"
                class="icon-link icon-link-hover stretched-link p-0 m-0"
                :to="{ name: 'loonvordering' }"
              >
                Lees meer

                <BIconArrowRight class="bi" />
              </router-link>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Arbeidsrecht hero.jpg";
import img1 from "@/assets/images/Vaststellingsovereenkomst Card.jpg";
import img2 from "@/assets/images/Loonvordering card.jpg";

import { onMounted } from "vue";
import { jarallax } from "jarallax";
import { BIconArrowRight } from "bootstrap-icons-vue";

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
img {
  height: 350px;
}
p {
  font-size: 20px;
  color: #574640;
}
span {
  color: #574640;
}
h5 {
  color: #ffa102 !important;
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
    font-size: 30px !important;
  }
}

@media (max-width: 430px) {
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
    margin-top: 70% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
}
</style>
