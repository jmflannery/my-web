import {notFound} from 'next/navigation';
import {fetchPost, fetchPosts} from '@/actions/posts';
import Post from '@/components/Post';

const AdminBlogPostPage = async ({params: {slug}}) => {
  const posts = await fetchPosts();
  const postItem = posts.find(post => post.slug === slug);
  const post = await fetchPost(postItem?.id);

  if (!post) {
    notFound(slug);
  }

  return <Post post={post} admin={true} />;
};

export default AdminBlogPostPage;
