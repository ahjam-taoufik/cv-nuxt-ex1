<template>
  <div>
    <TheHeader/>
    <Nuxt />
  </div>
</template>
<script>

import TheHeader from "@/components/TheHeader";
export default {
  name: "default",
  componnents: {
    TheHeader
  },
  data() {
    return {
    };
  },
};
</script>

<style>
html {
  font-family: "Arima", cursive;
}
</style>
