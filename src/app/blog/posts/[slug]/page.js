import {notFound} from 'next/navigation';
import {fetchPost, fetchPosts} from '@/actions/posts';
import Post from '@/components/Post';

const blogName = "Jack's Weblog";

const withBlogName = text => `${text} | ${blogName}`;

export const generateMetadata = async ({params: {slug}}) => {
  const posts = await fetchPosts();
  const postItem = posts.find(post => post.slug === slug);
  const post = await fetchPost(postItem?.id);

  if (!post) return {};

  return {
    title: withBlogName(post.title),
    description: withBlogName(`${post.title} | ${post.description}`),
  };
};

export const getStaticParams = () =>
  fetchPosts().map(post => {
    slug: post.slug;
  });

const PostPage = async ({params: {slug}}) => {
  const posts = await fetchPosts();
  const postItem = posts.find(post => post.slug === slug);
  const post = await fetchPost(postItem?.id);

  if (!post) {
    notFound(slug);
  }

  return <Post post={post} />;
};

export default PostPage;
