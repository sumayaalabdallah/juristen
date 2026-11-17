<template>
  <div
    class="position-relative py-8 mb-lg-9 mt-0 mx-0 px-0 card3 aos"
    data-aos="fade-up"
    data-aos-delay="80"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
  >
    <div class="image-container img1">
      <img
        src="@/assets/images/V.E. Steijvers van Orselen.jpg"
        alt="Jewelry"
        width="450"
        class="jewelry-image pt-lg-9 pt-sm-0 mt-lg-9 mt-sm-0"
      />
    </div>

    <div
      class="content-container w-50 position-absolute"
      style="left: 50%; top: 22%"
    >
      <h3 class="text-h5 text1">Mw. mr. V.E. Steijvers van Orselen</h3>
      <p class="pt-5">
        Expert in letselschade, met een passie voor het ondersteunen van de
        zwakkere partij.
      </p>
      <button class="more-button" @click="navigateToJuristen1">
        LEES MEER
      </button>
    </div>
    <h2 class="w-100"></h2>
  </div>
  <div
    class="position-relative py-8 mx-0 px-0 aos"
    data-aos="fade-up"
    data-aos-delay="80"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
  >
    <div class="image-container mt-lg-6 mt-sm-0 img2" style="">
      <img
        src="@/assets/images/Vaststellingsovereenkomst Card.jpg"
        alt="Jewelry"
        width="450"
        height="10%"
        class="jewelry-image"
      />
    </div>

    <div
      class="content-container w-50 position-absolute container2"
      style="right: 45%; top: 20%"
    >
      <h3 class="text-h5 text2">Dhr. T. Abu Khalefa</h3>
      <p class="pt-5">
        Streeft naar het hoogst haalbare resultaat voor zijn cliënten en een
        rechtvaardige behandeling.
      </p>
      <button class="more-button" @click="navigateToJuristen2">
        LEES MEER
      </button>
    </div>
    <h2 class="w-100"></h2>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const navigateToJuristen1 = () => {
  scrollToTop();
  router.push({ name: "juristen-V.E.Steijvers-van-Orselen" });
};
const navigateToJuristen2 = () => {
  scrollToTop();
  router.push({ name: "juristen-T.Abu-Khalefa" });
};
</script>

<style scoped>
.img1 {
  position: absolute;
  right: 25%;
  top: -80%;
}
.img2 {
  position: absolute;
  left: 25%;
  top: -10%;
}
h3 {
  text-align: start;
  color: #574640;
  margin-top: 3.5rem;
}
p {
  text-align: start;

  font-size: 20px;
}
.luxury-jewelry-collection {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: black;
  padding: 20px;
}

.image-and-line-container {
  width: 100%;
  position: relative;
}

.image-container {
  text-align: center;
  width: 100%;
}
.jewelry-image {
  border-radius: 25px;
}

.content-container {
  text-align: center;
  width: 100%;
  padding-top: 20px;
}

h2 {
  background-color: #ffa102;
  padding: 50px;
  width: 100%;
}

.more-button {
  background-color: transparent;
  border: 1px solid #ffa102;
  color: #222;
  padding: 10px 100px;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  z-index: 99;
}
.more-button:hover {
  background-color: #ffa102;
  color: #222;
}
@media (max-width: 1366px) {
  .card3 {
    margin-bottom: 10rem !important;
  }
  .text1 {
    margin-top: 2rem !important;
  }
  .container2 {
    right: 49% !important;
  }
  .img1 {
    right: 25%;
    top: -80%;
  }
  .img2 {
    left: 25%;
    top: -10%;
  }
}
@media (max-width: 1180px) {
  .img1 {
    right: 58%;
    top: -37%;
    width: 390px;
  }
  .img2 {
    left: 59%;
    top: 0%;
    width: 390px;
  }
  .jewelry-image {
    padding: 0 !important;

    /* height: 100% !important; */
  }
  .luxury-jewelry-collection {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0;
  }

  .image-and-line-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    flex: 1;
    padding-left: 20px;
    text-align: left;
  }

  h2 {
    display: block;
  }
}
@media (max-width: 1000px) {
  .img1 {
    right: 53%;
    top: 15%;
  }
  .img2 {
    left: 53%;
    top: 15%;
  }
}
@media (max-width: 800px) {
  .img1 {
    right: 49%;
    top: 15%;
  }
  .img2 {
    left: 49%;
    top: 15%;
  }
}
@media (max-width: 500px) {
  .img1 {
    right: 22%;
    top: -80%;
  }
  .img2 {
    left: 25%;
    top: -10%;
  }
  .card3 {
    margin-bottom: 0 !important;
  }
  .container2 {
    right: 48% !important;
  }
  .jewelry-image {
    height: 100% !important;
  }
  .image-container {
    height: 75% !important;
    top: 25% !important;
  }
  .image-container img {
    width: 170px;
    height: 350px;
  }
  p {
    font-size: 10px;
  }
  .content-container {
    width: 25%;
  }
  .more-button {
    padding: 10px 30px;
    font-size: 10px;
  }
  h3 {
    font-size: 15px !important;
  }
  h2 {
    padding: 45px;
  }
  .text1 {
    margin-top: 3rem !important;
  }
  .text2 {
    margin-top: 4.5rem !important;
  }
}
</style>
