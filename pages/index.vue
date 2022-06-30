<template>
  <div>
    <section class="intro">
      <h1>tech News</h1>
    </section>

    <section class="featured-posts">
      <SinglePost
        id="1"
        title="title1"
        previewText="previewText 1"
        thumbnail="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <SinglePost
        id="2"
        title="title2"
        previewText="previewText 2"
        thumbnail="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </section>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
export default {
  name: "IndexPage",
  components: {
    SinglePost,
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

.featured-posts {
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
