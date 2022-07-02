<template>
     <section class="posts-list">
      <SinglePost
        id="1"
        v-bind:is-admin="isAdmin"
        title="title1"
        previewText="previewText 1"
        thumbnail="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </section>
</template>

<script>
import SinglePost from "@/components/Posts/SinglePost";
    export default {
         name: "PostList",
         components: {
    SinglePost,
  },
  props:{
      isAdmin:{
        type:Boolean,
        default:false
      }
  },
        
    }
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  /* box-sizing: border-box; */
  flex-wrap: wrap;
  /* align-items: center; */
  /* justify-content: center; */
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 300px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  /* background-position: center; */
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content
/* ,
/* a:active .post-content  */ {
  background-color: #ccc;
}
</style>