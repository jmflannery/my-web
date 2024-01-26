import React from 'react';
import {fetchPost, fetchPosts} from '@/actions/posts';
import PostForm from '@/components/PostForm';

const AdminBlogPostEditPage = async ({params: {slug}}) => {
  const posts = await fetchPosts();
  const postItem = posts.find(post => post.slug === slug);
  const post = await fetchPost(postItem?.id);

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm post={post} />
    </>
  );
};

export default AdminBlogPostEditPage;
