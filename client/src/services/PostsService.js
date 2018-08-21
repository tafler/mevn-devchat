import api from './api';

export default {
  fetchPosts() {
    return api().get('posts');
  },
  addNewPost(params) {
    return api().post('posts', params);
  },
  getPost(params) {
    return api().get(`posts/${params.id}`);
  },
  updatePost(params) {
    return api().get(`posts/${params.id}`, params);
  },
  deletePost(id) {
    return api().delete(`posts/${id}`);
  },
};
