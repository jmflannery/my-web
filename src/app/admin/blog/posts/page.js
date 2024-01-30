import {fetchPosts} from '@/actions/posts';
import PostListItem from '@/components/PostListItem';

import './page.css';

const AdminBlogPostsPage = async () => {
  const posts = await fetchPosts(true);

  return (
    <ul className="posts">
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} admin />;
      })}
    </ul>
  );
};

export default AdminBlogPostsPage;
