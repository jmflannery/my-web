import {fetchPosts} from '@/actions/posts';
import PostListItem from '@/components/PostListItem';

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <ul className="posts">
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </ul>
  );
};

export default PostsPage;
