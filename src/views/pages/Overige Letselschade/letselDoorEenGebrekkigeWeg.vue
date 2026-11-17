<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-600px h-md-600px h-xl-750px position-relative pb-0 mb-0"
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
          Letsel door een gebrekkige weg
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Naast de meer gebruikelijke ongevallen waarbij een andere partij
          zichtbaar betrokken is, kunnen dergelijke incidenten ook indirect
          plaatsvinden. Denk bijvoorbeeld aan een val van een voetganger of
          fietser door een gebrekkig wegdek, zoals losliggende stoeptegels of
          hoogteverschillen tussen tegels. In deze situaties kan de wegbeheerder
          of gemeente aansprakelijk worden gesteld. Cruciaal hierbij is het
          verzamelen van voldoende bewijs en eventuele getuigenverklaringen.
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
                <h6 class="creative-title">Gebrekkig wegdek</h6>
                <p>
                  Volgens het Nederlandse recht geldt een
                  risicoaansprakelijkheid voor de bezitter van een ‘opstal’. Dit
                  betekent dat wegen en stoepen aan bepaalde eisen moeten
                  voldoen, zodat ze niet als gebrekkig kunnen worden aangemerkt.
                  Naast wegen en stoepen kan deze aansprakelijkheid ook gelden
                  bij bijvoorbeeld een ongeval veroorzaakt door een omgevallen
                  boom of een gebouw waarvan delen losgeraakt zijn. Er wordt
                  echter gekeken naar meerdere aspecten voordat een weg of stoep
                  daadwerkelijk als gebrekkig wordt beschouwd en
                  aansprakelijkheid wordt erkend. Een gebrekkig wegdek kan
                  worden omschreven als een beschadigd of slecht onderhouden
                  wegoppervlak dat gevaar oplevert. Voorbeelden hiervan zijn
                  gaten, scheuren of verzakkingen in het wegdek; losse steentjes
                  of opstaande randen van stoeptegels; en gladde oppervlakken of
                  afbrokkelend asfalt. Deze gebreken kunnen leiden tot
                  ongevallen waarbij personen of voertuigen schade oplopen.
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
            src="@/assets/images/Side images/حالات16.jpg"
            alt="side-image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title">Belang van bewijsmateriaal</h6>
              <p style="color: #fff" class="pb-8">
                Het is van groot belang om foto’s van het gebrekkige wegdek te
                maken, bij voorkeur met een meetlat ernaast om het
                daadwerkelijke gebrek in beeld te brengen. Dit voorkomt dat de
                wegbeheerder na ontvangst van de aansprakelijkstelling het
                gebrek herstelt en dat het bewijs hiermee verloren gaat (indien
                het wegdek hersteld wordt impliceert dit veelal geen
                aansprakelijkheid). Getuigenverklaringen spelen ook een
                belangrijke rol in dergelijke zaken. Noteer daarom gegevens van
                eventuele getuigen en probeer, indien dit niet direct is gedaan,
                later camerabeelden veilig te stellen of via flyers getuigen op
                te roepen.
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
            <h6 class="creative-title">Letsel door een gebrekkige weg</h6>
            <p>
              De aard van het letsel varieert van licht tot ernstig, vooral bij
              fietsers en voetgangers die vaak zonder helm op pad gaan.
              Veelvoorkomende letsels zijn onder meer:
            </p>
            <ul
              class="aos"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <li>
                <span>Oppervlakkige verwondingen </span>
                <p>
                  o Schaafwonden, kneuzingen of snijwonden door contact met het
                  wegdek.
                </p>
              </li>
              <li>
                <span>Botbreuken</span>
                <p>
                  o Gebroken polsen, armen of sleutelbenen bij een val waarin
                  iemand zich probeert op te vangen.
                </p>
                <p>
                  o Gebroken heupen of benen bij een zwaardere val, vooral bij
                  ouderen.
                </p>
              </li>

              <li>
                <span>Verstuikingen of verrekkingen</span>
                <p>o Verstuikte enkels of polsen door een ongelijke landing.</p>
              </li>
              <li>
                <span>Hoofd- en hersenletsel</span>
                <p>
                  o Kneuzingen of snijwonden aan het hoofd bij een harde val.
                </p>
                <p>
                  o Mogelijke hersenschudding of ernstiger letsel als er geen
                  helm wordt gedragen.
                </p>
              </li>
              <li>
                <span>Rug- en nekklachten</span>
                <p>
                  o Verstuikingen of ernstiger letsel, zoals
                  wervelbeschadigingen, door een ongunstige val.
                </p>
              </li>
              <li>
                <span>Tand- en kaakschade</span>
                <p>
                  o Beschadigd gebit of gebroken kaak door direct contact met de
                  grond.
                </p>
              </li>
              <li>
                <span>Psychische schade</span>
                <p>
                  o Angst om op vergelijkbare plekken te lopen of fietsen na een
                  ongeluk (posttraumatische stress).
                </p>
              </li>
            </ul>
            <p>
              Na een ongeval is het aan te raden om een arts te bezoeken, zelfs
              als een ambulance ter plaatse is geweest. Afhankelijk van de
              klachten kan aanvullend contact met de eigen huisarts aan te raden
              zijn.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            style="background-color: #574640; position: relative; color: #fff"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title">Aansprakelijkheid</h6>
              <p style="color: #fff">
                Wanneer al het bewijs is verzameld, kan de wegbeheerder
                aansprakelijk worden gesteld voor de geleden schade. Onze
                ervaring leert dat duidelijke bewijzen de kans vergroten dat de
                aansprakelijkheid spoedig kan worden erkend. Aangezien het
                beheer van wegen meestal onder de verantwoordelijkheid van de
                gemeente of provincie valt, kan het voorkomen dat de
                aansprakelijkheid aanvankelijk wordt afgewezen. De overheid
                neemt vaak een kritische houding aan in dergelijke zaken, ook
                gelet op de budgetten die hiervoor doormiddel van belastinggeld
                worden gesubsidieerd.
              </p>
              <p style="color: #fff" class="pb-8">
                Wanneer al het bewijs is verzameld, kan de wegbeheerder
                aansprakelijk worden gesteld voor de geleden schade. Onze
                ervaring leert dat duidelijke bewijzen de kans vergroten dat de
                aansprakelijkheid spoedig kan worden erkend. Aangezien het
                beheer van wegen meestal onder de verantwoordelijkheid van de
                gemeente of provincie valt, kan het voorkomen dat de
                aansprakelijkheid aanvankelijk wordt afgewezen. De overheid
                neemt vaak een kritische houding aan in dergelijke zaken, ook
                gelet op de budgetten die hiervoor doormiddel van belastinggeld
                worden gesubsidieerd.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/20- Letsel door een gebrekkige weg.jpg";

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
span {
  font-size: 20px;
  color: #574640;
}
h6 {
  color: #ffa102;
}
.btns {
  margin-top: 15rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -85px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 15rem !important;
  }
  .title {
    margin-top: -40px !important;
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
    margin-top: 13rem !important;
  }
  p {
    font-size: 12px !important;
  }
  .title {
    margin-top: -150px !important;
  }
  .creative-title {
    font-size: 25px !important;
  }
}
@media (max-width: 414px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -28% !important;
  }
  .creative-title {
    font-size: 20px !important;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 76% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    margin-top: 79% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    margin-top: 85% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    margin-top: 90% !important;
  }
}
</style>
