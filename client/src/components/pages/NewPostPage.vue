<template>
    <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>
          Add New Post
        </h1>
        <form  @submit.prevent="addPost()">
          <div class="form-group">
            <input type="text" name="title" id="title" placeholder="Title" class="form-control" v-model.trim="post.title">
          </div>
          <div class="form-group">
            <input type="text" rows="5" name="description" id="description" placeholder="Description" class="form-control" v-model.trim="post.description">
          </div>
          <div class="form-group">
            <button type="submit" name="addPost" id="addPost" placeholder="Title" class="btn btn-block btn-success">
              Add post
            </button>
          <section> 
            <button type="button" class="btn btn-block btn-success" @click="goBack()">
              go to posts page
            </button>
          </section>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService';

  export default {
    name: 'NewPostPage',
    data () {
      return {
        post: {
          title: '',
          description: '',
        }
      }
    },
    methods: {
      async addPost() {
        if(this.post.title !== '' && this.post.description !== ''){
          await PostsService.addNewPost({
            title: this.post.title,
            desccription: this.post.title,
          });
          this.$router.push({ name: 'Posts' });
        } else {
          alert('Empty fields');
        }
      },
      goBack() {
        this.$router.push({ name: 'Posts' });
      }
    }
  }
</script>