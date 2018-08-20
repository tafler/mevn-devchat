import Start from '@/components/pages/StartPage';
import Posts from '@/components/pages/PostsPage';

const routes = [{
  path: '/',
  name: 'Start',
  component: Start,
},
{
  path: '/posts',
  name: 'posts',
  component: Posts,
}];

export default routes;
