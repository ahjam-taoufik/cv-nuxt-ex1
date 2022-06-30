<template>
    <div>
        <nuxt-link to="/users">go to users</nuxt-link>
        <p>
            user Id : {{$route.params.id}}
        </p>
    </div>
</template>
<script>
export default {
    validate(data){
       return  /^\d+$/.test(data.params.id) // accept only numbers
    }
   
}
</script>