import urls from '@/urls';

const fetchPosts = async () => {
  const res = await fetch(urls.posts);

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return res.json();
};

const Posts = async () => {
  const posts = await fetchPosts();

  return <div>My Posts!</div>;
};

export default Posts;
