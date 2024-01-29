'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import urls from '@/urls';

const headers = (admin = false) => ({
  'Content-Type': 'application/json',
  ...(admin && {Authorization: `Bearer ${cookies().get('api_key')?.value}`}),
});

export const fetchPosts = async (admin = false) => {
  const res = await fetch(urls.posts, {
    method: 'GET',
    headers: headers(admin),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return res.json();
};

export const fetchPost = async (id, admin = false) => {
  const res = await fetch(urls.post(id), {
    method: 'GET',
    headers: headers(admin),
    credentials: 'include',
  });

  if (!res.ok) {
    // throw new Error('Failed to fetch Post');
    return null;
  }

  return res.json();
};

const formDataToJson = formData => {
  const title = formData.get('title');
  const slug = formData.get('slug');
  const body = formData.get('body');
  return JSON.stringify({title, slug, body});
};

export const createPost = async formData => {
  const res = await fetch(urls.posts, {
    method: 'POST',
    headers: headers(true),
    body: formDataToJson(formData),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to create Post');
  }

  return res.json();
};

export const updatePost = async (formData, id) => {
  const res = await fetch(urls.post(id), {
    method: 'PUT',
    headers: headers(true),
    body: formDataToJson(formData),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to update Post');
  }

  return res.json();
};

export const publishPost = async post => {
  console.log(urls.publishPost(post.id));
  const res = await fetch(urls.publishPost(post.id), {
    method: 'PUT',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to publish Post');
  }

  redirect(`/admin/blog/posts/${post.slug}`);
};

export const unpublishPost = async post => {
  const res = await fetch(urls.unpublishPost(post.id), {
    method: 'PUT',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to publish Post');
  }

  redirect(`/admin/blog/posts/${post.slug}`);
};

export const deletePost = async post => {
  const res = await fetch(urls.post(post.id), {
    method: 'DELETE',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to delete Post');
  }

  redirect('/admin/blog/posts');
};
