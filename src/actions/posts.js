'use server';

import {cookies} from 'next/headers';
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

export const fetchPost = async (postId, admin = false) => {
  const res = await fetch(urls.post(postId), {
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
    throw new Error('Failed to POST Post');
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
    throw new Error('Failed to PUT Post');
  }

  return res.json();
};
