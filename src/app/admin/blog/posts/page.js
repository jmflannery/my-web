import {fetchPosts} from '@/actions/posts';
import PostsList from '@/components/PostsList';

const AdminBlogPostsPage = async () => {
  const posts = await fetchPosts(true);

  return <PostsList posts={posts} admin />;
};

export default AdminBlogPostsPage;
