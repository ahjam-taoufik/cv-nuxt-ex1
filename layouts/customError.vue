<template>
 <div>
    <Header/>
    <h1>custom Error page Header</h1>
  <Nuxt />
    <h1>custom Error page Footer</h1>
   
 </div>
</template>

<script>
 import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  
}
</script>