<template>
    <div>
        <AdminForm :post="loadData"/>
    </div>
</template>

<script>
   import AdminForm from "@/components/Admin/AdminForm"
export default {
    components: {
      AdminForm
    },
    data(){
        return{
            loadData:{
                 author:'Taoufik',
                title:'Java Patern',
                thumbnailLink:'https://test.png',
                content:'this is the first content',
            }
           
        }
    },
   
};
</script>

