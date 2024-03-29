'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';
import urls from '@/urls';

const blogPaths = slug => [
  urls.web.blog.root,
  urls.web.blog.posts,
  urls.web.blog.post(slug),
];

const adminBlogPaths = slug => [
  urls.web.admin.blog.root,
  urls.web.admin.blog.posts,
  urls.web.admin.blog.post(slug),
];

const revalidateBlogPaths = paths =>
  paths.forEach(path => revalidatePath(path));

const headers = (admin = false) => ({
  'Content-Type': 'application/json',
  ...(admin && {Authorization: `Bearer ${cookies().get('api_key')?.value}`}),
});

export const fetchPosts = async (admin = false) => {
  const res = await fetch(urls.api.posts, {
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
  const res = await fetch(urls.api.post(id), {
    method: 'GET',
    headers: headers(admin),
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const fetchLatestPost = async () => {
  const posts = await fetchPosts();
  return posts?.[0];
};

const formDataToJson = formData => {
  const title = formData.get('title');
  const slug = formData.get('slug');
  const description = formData.get('description');
  const body = formData.get('body');
  return JSON.stringify({title, slug, description, body});
};

export const createPost = async formData => {
  const res = await fetch(urls.api.posts, {
    method: 'POST',
    headers: headers(true),
    body: formDataToJson(formData),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to create Post');
  }

  const post = await res.json();
  revalidateBlogPaths(adminBlogPaths(post.slug));

  return post;
};

export const updatePost = async (formData, id) => {
  const res = await fetch(urls.api.post(id), {
    method: 'PUT',
    headers: headers(true),
    body: formDataToJson(formData),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to update Post');
  }

  const post = await res.json();
  revalidateBlogPaths(adminBlogPaths(post.slug));
  if (post.published_at) {
    revalidateBlogPaths(blogPaths(post.slug));
  }

  return post;
};

export const publishPost = async post => {
  const res = await fetch(urls.api.publishPost(post.id), {
    method: 'PUT',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to publish Post');
  }

  revalidateBlogPaths(blogPaths(post.slug));
  revalidateBlogPaths(adminBlogPaths(post.slug));
};

export const unpublishPost = async post => {
  const res = await fetch(urls.api.unpublishPost(post.id), {
    method: 'PUT',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to publish Post');
  }

  revalidateBlogPaths(blogPaths(post.slug));
  revalidateBlogPaths(adminBlogPaths(post.slug));
};

export const deletePost = async (post, redirectPath) => {
  const res = await fetch(urls.api.post(post.id), {
    method: 'DELETE',
    headers: headers(true),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to delete Post');
  }

  revalidateBlogPaths(adminBlogPaths(post.slug));
  if (post.published_at) {
    revalidateBlogPaths(blogPaths(post.slug));
  }

  if (redirectPath) {
    redirect(redirectPath);
  }
};
