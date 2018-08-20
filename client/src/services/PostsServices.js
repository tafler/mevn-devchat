import api from 'api';

export default {
  fetchPosts() {
    return api().get('posts');
  },
};
