<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Posts</h1>
        <h3>This file will list all the posts</h3>
        <section class="panel panel-succes" v-if="posts.length">
          <div class="panel-heading">
            List of posts
          </div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="(post, index) in posts" :key="index + ' ' + post.title">
              <td> {{ post.title }} </td>
              <td> {{ post.description }} </td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-else>
          <p>There are no posts .. Let add one now!</p>
          <div class="router-link" :to="{ name: 'NewPost' }">
            add new post
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsServices from '@/servies/PostService';

  export default {
    name: 'PostsPage',
    data() {
      return {
        posts: [],
      }
    },
    methods: {
      async getPosts() {
        const response = await PostsServices.fetchPosts();
        this.posts = response.data.posts;
      }
    },
    mounted() {
      this.getPosts();
    }
  }
</script>