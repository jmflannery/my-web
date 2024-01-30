import {fetchPosts} from '@/actions/posts';
import PostsList from '@/components/PostsList';

const BlogPostsPage = async () => {
  const posts = await fetchPosts();

  return <PostsList posts={posts} />;
};

export default BlogPostsPage;
