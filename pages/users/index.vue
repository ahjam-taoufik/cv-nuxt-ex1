<template>
    <div>
        <p>index if all users</p>
        <input v-model="user" />
        <button v-on:click="getUser">get</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:''
        }
    },
    methods: {
        getUser:function(){
            this.$router.push('/users/'+this.user)
        }
    }
}
</script>