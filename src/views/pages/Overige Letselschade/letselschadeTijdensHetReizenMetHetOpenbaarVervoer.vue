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
          Letselschade tijdens het reizen met het openbaar vervoer
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Het openbaar vervoer omvat verschillende vervoermiddelen, zoals de
          trein, bus, taxi, tram en metro. Vooral in en rond steden maken veel
          mensen dagelijks gebruik van deze vervoersopties. Tijdens het reizen
          kunnen echter ongelukken gebeuren, bijvoorbeeld door een plotselinge
          noodstop. Dergelijke incidenten kunnen leiden tot letselschade,
          waarvoor u vaak recht heeft op een schadevergoeding.
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
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                  padding: 10px;
                "
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    Volgens de wet Aansprakelijkheid Openbaar Vervoer,
                    vastgelegd in het Burgerlijk Wetboek, zijn vervoerders
                    aansprakelijk voor letselschade die reizigers oplopen
                    tijdens hun reis. Stel dat u bijvoorbeeld met een trein van
                    de Nederlandse Spoorwegen (NS) reist en letsel oploopt door
                    een noodstop, een technisch defect, of een onveilig
                    instapperron. In dat geval is NS verantwoordelijk voor de
                    schade.
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
                class="aos mb-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  Vervoersbedrijven hebben een wettelijke zorgplicht om de
                  veiligheid van reizigers te waarborgen. Dit betekent onder
                  andere dat zij gekwalificeerde bestuurders moeten inzetten,
                  voertuigen regelmatig moeten onderhouden en controles moeten
                  uitvoeren. Als een vervoerder zorgvuldig heeft gehandeld en
                  het ongeluk onvermijdelijk was, kan een rechter besluiten dat
                  het vervoersbedrijf niet aansprakelijk is. De
                  aansprakelijkheid kan daarnaast betwist worden als het ongeval
                  te wijten is aan de reiziger zelf, bijvoorbeeld door
                  dronkenschap of ander gevaarlijk gedrag (denk bijvoorbeeld aan
                  het uitsteken van een arm door een openstaand treinraam).
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
            src="@/assets/images/Side images/حالات17.jpg"
            alt="Side image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Ook zijn er situaties waarin een vervoerder niet aansprakelijk is,
              zoals bij overmacht. In dat geval kan gedacht worden aan
              terroristische aanslagen of extreme weersomstandigheden. De
              bewijslast hiervoor ligt bij de vervoersmaatschappij. In sommige
              gevallen is er sprake van gedeelde schuld, waarbij zowel de
              passagier als het vervoersbedrijf verantwoordelijkheid dragen. Het
              vaststellen van schuld kan in zulke situaties complex zijn. Het
              inschakelen van een letselschadejurist of advocaat is dan
              verstandig.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Als u letselschade oploopt tijdens een reis met het openbaar
              vervoer, is het belangrijk om snel actie te ondernemen. Meld het
              ongeval bij de vervoerder en vul een schadeformulier in. Bewaar
              bewijs van uw reis, zoals een uitdraai van uw OV-chipkaart of
              betaalbewijs. Zelfs als u zwart heeft gereisd tijdens de
              betreffende rit, kan de vervoerder in sommige gevallen alsnog
              aansprakelijk worden gesteld. Naast NS zijn ook andere
              vervoerders, zoals Connexxion, R-Net en RET, aansprakelijk bij
              ongevallen met hun voertuigen.
            </p>
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
              Het inschakelen van een letselschade-expert kan helpen om uw claim
              zorgvuldig af te handelen, zodat u de vergoeding krijgt waar u
              recht op heeft en u zich volledig kunt richten op uw herstel. S&A
              Juristen staat klaar om u hierbij te ondersteunen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <h4 class="my-3 text-primary">
            Een ongeval als voetganger of fietser
          </h4>
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Het is ook mogelijk dat u al
              <router-link
                @click="scrollToTop"
                :to="{ name: 'voetgangersongeluk' }"
                style="color: #17a2b8"
                >voetganger</router-link
              >
              of
              <router-link
                @click="scrollToTop"
                :to="{ name: 'fietsongeval' }"
                style="color: #17a2b8"
                >fietser</router-link
              >
              wordt aangereden door bijvoorbeeld een bus of tram. In dat geval
              heeft u in vrijwel bijna alle gevallen recht op vergoeding van
              minimaal 50% van uw letselschade.
            </p>
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
              Fietsers en voetgangers worden beschouwd als kwetsbare
              verkeersdeelnemers en deze groep heeft daarom vrijwel altijd recht
              op een vergoeding van minimaal 50%, ongeacht wie er schuldig is
              aan het ongeval. Slechts in uitzonderlijke gevallen kan van deze
              regel worden afgeweken, er moet in dat geval sprake zijn van opzet
              of aan opzet grenzende roekeloosheid (hier is in de praktijk
              zelden sprake van). Het percentage kan daarentegen ook oplopen tot
              een volledige vergoeding van 100%, natuurlijk is dit afhankelijk
              van de situatie.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Fietsers, voetgangers en ook jonge kinderen vallen onder speciale
              regelingen en hebben hierdoor veelal eerder recht op een
              vergoeding voor letselschade. Het is daarom belangrijk, indien het
              plaatsvinden van het ongeval (deels) uw eigen schuld is geweest,
              om niet te snel aan te nemen dat u geen recht op een vergoeding
              heeft. Voor meer informatie kunt u kijken op de pagina
              ‘fietsongeluk’ of ‘voetgangersongeluk’ en contact opnemen met S&A
              Juristen.
            </p>
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
              Uiteraard is er bij deze gevallen geen sprake van de
              vervoerdersaansprakelijkheid op grond van artikel 8:105 BW, immers
              gaat het hier om een aanrijding tussen twee partijen.
            </p>
          </b-card>
        </b-col>

        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/21- Letselschade tijdens het reizen met het openbaar vervoer.jpg";

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
  margin-top: 21rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 1366px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -40px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
  p {
    font-size: 15px !important;
  }
}
@media (max-width: 1024px) {
  .creative-title {
    font-size: 25px !important;
  }
  .btns {
    margin-top: 11rem !important;
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
    margin-top: 65% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 414px) {
  .btns {
    margin-top: 70% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    margin-top: 74% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    margin-top: 7% !important;
  }
}
</style>
