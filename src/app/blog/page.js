import urls from '../../urls';

const getPosts = async () => {
  const res = await fetch(urls.api.posts);

  if (!res.ok) {
    throw new Error('Failed to fetch Profile');
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getPosts();
  return 'Weblog';
};

export default BlogPage;
