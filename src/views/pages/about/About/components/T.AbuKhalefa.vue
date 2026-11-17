<template>
  <section class="position-relative pb-0">
    <b-container>
      <b-row>
        <b-col lg="7">
          <div
            class="inner-container mx-auto aos"
            data-aos="fade-right"
            data-aos-delay="120"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h3 class="mb-4">Dhr. T. Abu Khalefa</h3>
            <p class="my-5">
              Ik ben Tariq en mede-eigenaar van S&A Juristen. Het is mijn passie
              om mensen te kunnen ondersteunen bij juridische vraagstukken, met
              daarbij de focus op het behartigen van de belangen van de partij
              in het proces die wegens zijn positie eigenlijk 3-0 achterstaat.
              Iedereen verdient het om zijn recht te kunnen halen. Ik vind het
              daarbij essentieel dat iedere cliënt persoonlijke aandacht krijgt
              en geen ‘nummertje’ wordt. Door bewust het aantal zaken dat ik
              behandel te beperken, kan ik voldoende tijd en zorg besteden aan
              elk dossier. Samen met mijn cliënten bepaal ik de richting,
              waarbij hun belangen altijd centraal staan. Mijn ervaring, zowel
              professioneel als persoonlijk, stelt mij in staat om uiteenlopende
              zaken, van eenvoudig tot complex, effectief te behandelen.
            </p>
          </div>
        </b-col>

        <b-col lg="5" class="d-flex align-items-start justify-content-end">
          <div
            class="aos"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <img
              style="border-bottom: 7px solid #ffa102; border-radius: 7px"
              :src="icon1"
              loading="lazy"
              alt="about-us"
            />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="my-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Tijdens mijn bachelor Rechtsgeleerdheid ontstond mijn interesse
                in het aansprakelijkheidsrecht, en specifiek in letselschade.
                Dat leidde uiteindelijk dan ook tot mijn werk als
                letselschadebehandelaar, een rol waarin ik nu al zes jaar actief
                ben. Ik behandel zowel kleine als grote zaken, variërend van
                verkeersongevallen tot complexere medische aansprakelijkheid, en
                bied ik daarbij bijstand aan slachtoffers met licht tot zwaar
                letsel.
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
          <p
            class="aos"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Mijn persoonlijke ervaring speelt dan ook een belangrijke rol in
            mijn werk. In 2021 ben ik namelijk zelf slachtoffer van een
            motorongeval geworden waarbij ik zwaar letsel op heb gelopen. Dit
            gaf mij een uniek inzicht in hoe vermoeiend en emotioneel belastend
            het kan zijn om als slachtoffer met verzekeraars en andere partijen
            te maken te hebben. Deze ervaring motiveert mij extra om mijn
            cliënten optimaal bij te staan.
          </p>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="my-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Naast mijn werk blijf ik mezelf continu ontwikkelen door
                cursussen en opleidingen te volgen om mijn kennis te verbreden
                en actueel te houden. In mijn vrije tijd geniet ik van sporten,
                wandelen, en tijd doorbrengen met familie en vrienden.
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
          <p
            class="aos"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Bij S&A Juristen streef ik ernaar om het verschil te maken voor mijn
            cliënten en hen de ondersteuning te bieden die ze verdienen in
            uitdagende tijden.
          </p>
        </b-col>

        <b-col lg="12">
          <router-link
            class="btn btn-6 bg-primary btn-lg btn-white icon-link icon-link-hover mb-0 px-3 aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            :to="{ name: 'contact' }"
            @click="scrollToTop"
          >
            Neem gratis contact met ons op
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import icon1 from "@/assets/images/Vaststellingsovereenkomst Card.jpg";
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
  AOS.init({ once: true });
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
p {
  font-size: 20px;
  color: #574640;
}
</style>
