<template>
     <form @submit.prevent="HandleSubmit">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
                <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel"
                >Cancel</AppButton>
      </form>
</template>

<script>
  import AppControlInput from "@/components/UI/AppControlInput"
  import AppButton from "@/components/UI/AppButton"
export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        post:{
            type:Object,
            required:false
        }
    },
    data(){
        return{
            editedPost:this.post?{...this.post}: {
                author:'',
                title:'',
                thumbnailLink:'',
                content:'',
            }
        }
    },
    methods:{
        HandleSubmit:function(){
            // console.log(this.editedPost);
        },
        onCancel:function(){
            this.$router.push('/admin')
        },
       

    }
};
</script>

<style  >
.new-post-form {  
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}

</style>
