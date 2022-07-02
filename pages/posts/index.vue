<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>


<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList,
  },
  data(){
    return{
        loadedPosts:[
            {
                id:'1',
                title:'Hello'
            }
        ]
    }
  },
  created(){
    this.$store.dispatch('setPosts',this.loadedPosts)
    // console.log(this.$store.getters.loadedPosts);
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
