import {fetchPosts} from '@/actions/posts';
import PostListItem from '@/components/PostListItem';

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} admin />;
      })}
    </>
  );
};

export default PostsPage;
