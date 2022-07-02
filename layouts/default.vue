<template>
  <div>
    <TheHeader  @sidenavToggle="displaySideNav= !displaySideNav"  />
    <TheSidenav  :show="displaySideNav" @close="displaySideNav=false" />
    <Nuxt />
  </div>
</template>
<script>

import TheHeader from "@/components/TheHeader";
import TheSidenav from "@/components/TheSidenav";
export default {
  name: "default",
  componnents: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySideNav:false
    };
  },
};
</script>

<style>
html {
  font-family: "Arima", cursive;
}
</style>
