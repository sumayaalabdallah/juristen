<template>
  <div id="contact-us" class="contact-us" @click="goToWhatsApp">
    <BIconWhatsapp style="font-size: 30px" />
  </div>
</template>

<script lang="ts" setup>
import { BIconWhatsapp } from "bootstrap-icons-vue";
const whatsappNumber = "31617141869";

const goToWhatsApp = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  window.open(whatsappLink, "_blank");
};
</script>
