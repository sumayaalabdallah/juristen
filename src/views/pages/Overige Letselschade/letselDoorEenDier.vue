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
          Letsel door een dier
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Letsel veroorzaakt door een dier kan op verschillende manieren
          ontstaan, denk daarbij bijvoorbeeld aan een hondenbeet of een val van
          een paard. In veel gevallen kan deze schade geclaimd worden bij de
          verzekeraar van de eigenaar van het dier. Voorafgaand aan een
          eventuele claim is het van belang dat eventuele getuigenverklaringen
          of aanvullende bewijsmiddelen voorhanden zijn.
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
      <b-row class="mt-0 pt-0">
        <b-col lg="8">
          <b-row
            class="mt-0 pt-0 d-flex align-items-center justify-content-center"
          >
            <b-col lg="12">
              <b-card
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <h6 class="creative-title my-3">Letselschade door een dier</h6>
                <p>
                  Dieren kunnen verschillende soorten schade veroorzaken,
                  waaronder lichamelijk letsel, emotionele schade en materiële
                  schade. Denk hierbij aan infecties, wonden, littekens,
                  angstgevoelens en meer. Als u letselschade heeft opgelopen
                  door bijvoorbeeld een aanval, beet, trap, een val van een dier
                  of zelfs in bepaalde gevallen doordat u moest uitwijken en
                  daardoor een ongeval kreeg, is het belangrijk om
                  bewijsmateriaal veilig te stellen zodat de eigenaar van het
                  dier aansprakelijk gesteld kan worden. De eigenaar kan de
                  schade vervolgens melden bij zijn
                  aansprakelijkheidsverzekeraar. Het is daarom cruciaal om de
                  contactgegevens van de eigenaar te noteren zodat hij/zij zo
                  snel mogelijk aansprakelijk gesteld kan worden. Helaas komt
                  het soms voor dat de eigenaar van het dier betwist dat zijn
                  dier verantwoordelijk is voor de schade. Om die reden
                  adviseren wij om zo volledig mogelijk te zijn met het
                  verzamelen van bewijsmateriaal, zoals videobeelden en/of
                  getuigenverklaringen. Dit proces hoeft u echter niet zelf te
                  doorlopen. Wanneer u uw schade bij ons meldt, nemen wij direct
                  actie om de schade te verhalen bij de verzekeraar van de
                  eigenaar van het dier. Wij bieden u volledige ondersteuning in
                  dit traject.
                </p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4">
          <img
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="border-radius: 3px"
            src="@/assets/images/Side images/حالات22.jpg"
            alt="side-image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            style="background-color: #574640; position: relative; color: #fff"
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title my-3">
                Wanneer is de eigenaar aansprakelijk voor schade door zijn dier?
              </h6>
              <p style="color: #fff">
                Om vast te stellen of uw letselschade vergoed kan worden, moet
                eerst worden nagegaan hoe de schade is ontstaan en wie de
                eigenaar van het dier is. In sommige gevallen kan het voldoende
                zijn om te achterhalen door wie het dier wordt gehouden, zoals
                bij een manege. Niet alle schade komt automatisch voor
                vergoeding in aanmerking. Als het gedrag van het dier is
                uitgelokt, kan een ander aansprakelijk zijn. Ook kan het
                voorkomen dat u zelf een fout heeft gemaakt, waardoor de schade
                mogelijk niet verhaald kan worden. In veel gevallen kan de
                aansprakelijkheid echter wel worden vastgesteld indien het
                bewijs omtrent het schade-incident aanwezig is of hier geen
                discussie over bestaat.
              </p>
              <p style="color: #fff">
                Wanneer de eigenaar bekend is, kan hij aansprakelijk worden
                gehouden voor de schade, zelfs als hem geen directe schuld
                treft. Volgens de wet geldt in dit geval
                risicoaansprakelijkheid: de eigenaar is verantwoordelijk voor de
                schade die door zijn dier wordt veroorzaakt, ongeacht of het
                dier bijvoorbeeld losliep of was weggelopen.
              </p>
              <p style="color: #fff" class="pb-8">
                Mocht de eigenaar niet bekend zijn of weigeren zijn identiteit
                kenbaar te maken, kan de politie ingeschakeld worden. Als de
                eigenaar tijdens het incident niet aanwezig was en ook na
                onderzoek niet te achterhalen is, kan in bijzondere gevallen een
                derde partij aansprakelijk worden gesteld. Echter, wanneer het
                zo is dat het dier geen eigenaar heeft, bijvoorbeeld als het
                gaat om een zwerfkat, dan is de schade vrijwel niet te verhalen.
                Schade door een aanval van een wolf in een natuurgebied kan
                daarentegen mogelijk wél worden geclaimd.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
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
            <h6 class="creative-title mt-3">
              Letselschade door een hondenbeet
            </h6>
            <p>
              In veel gevallen ontstaat letselschade door een dier door de beet
              van een hond. Dit kan op verschillende manieren gebeuren, vaak
              zelfs zonder duidelijke aanleiding. De lichamelijke gevolgen,
              zoals wonden, en de psychische impact, zoals angst voor honden,
              kunnen dan ook aanzienlijk zijn. Wij raden u aan om na een
              dergelijk incident contact op te nemen met uw huisarts. Ook
              adviseren wij in veel gevallen om tevens alvast een afspraak bij
              de POH-GGZ in te plannen, zeker wanneer het bijt-incident zonder
              aanleiding heeft plaatsgevonden.
            </p>
            <p>
              Wanneer u door een hond wordt gebeten, is de eigenaar van de hond
              volgens de Nederlandse wet aansprakelijk voor de schade. De meeste
              hondenbezitters hebben hiervoor een aansprakelijkheidsverzekering.
              Als de eigenaar van de hond echter niet verzekerd is, zal hij de
              schade uit eigen middelen moeten vergoeden.
            </p>
            <p>
              De eigenaar is verplicht om alle schade te vergoeden, zowel
              lichamelijke als materiële schade, zelfs als hem geen verwijt
              treft. Deze aansprakelijkheid geldt ook in gebieden waar honden
              los mogen lopen. De eigenaar blijft namelijk altijd
              verantwoordelijk voor het gedrag van zijn hond.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/27- Letsel door een dier.jpg";

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
h6 {
  color: #ffa102;
}
.btns {
  margin-top: 14rem !important;
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
    margin-top: -60px !important;
  }
  .creative-title {
    font-size: 35px !important;
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
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -32% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 64% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
}
</style>
