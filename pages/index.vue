<template>
  <div>
    <section class="intro">
      <h1>tech News</h1>
    </section>
     <PostList />
  
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  name: "IndexPage",
  components: {
    PostList,
  },
  
};
</script>

<style scoped>
.intro {
  height: 200px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  background-image: url('~assets/images/tech-image.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  /* position: absolute; */
  /* top: 10%; */
  /* left: 5%; */
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  /* box-sizing: border-box; */
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2.5rem;
  }
}

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
