<template>
  <div>
    <header class="header">
      <ul class="item-header">
        <li>
          <nuxtLink to="/">Home</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/users">users</nuxtLink>
        </li>
      </ul>
    </header>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-header {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content:center;
  align-items: center;
}
li{
    margin-right: 20px; 
}
a{
    text-decoration: none;
    color: white;
    font-size: 30px;
}
a:hover{
  color:rgb(115, 88, 238)
}

</style>
