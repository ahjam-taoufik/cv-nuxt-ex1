<template>
    <div>
        <nuxt-link to="/users">go to users</nuxt-link>
        <p>
            user Id : {{$route.params.id}}
        </p>
    </div>
</template>