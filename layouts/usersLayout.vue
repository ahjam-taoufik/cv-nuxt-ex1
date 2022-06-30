<template>
 <div>
   <Header/>
  <Nuxt />
    <h1>Section Users Footer from usersLayout</h1>
   
 </div>
</template>
<script>
 import Header from '~/components/Header'
 export default{
  name:'usersLayout',
   components:{
    Header
   }


 }

</script>