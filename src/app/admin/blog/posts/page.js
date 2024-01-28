import {fetchPosts} from '@/actions/posts';
import PostListItem from '@/components/PostListItem';

const AdminBlogPostsPage = async () => {
  const posts = await fetchPosts(true);

  return (
    <>
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} admin />;
      })}
    </>
  );
};

export default AdminBlogPostsPage;
