import {fetchPosts} from '@/actions/posts';

const AdminBlogPostsPage = async () => {
  const posts = await fetchPosts();

  return <div>Admin Posts Page</div>;
};

export default AdminBlogPostsPage;
