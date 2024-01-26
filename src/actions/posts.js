'use server';

import {cookies} from 'next/headers';
import urls from '@/urls';

export const fetchPosts = async () => {
  const key = cookies().get('api_key')?.value;

  const res = await fetch(urls.posts, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return res.json();
};

export const fetchPost = async postId => {
  const key = cookies().get('api_key')?.value;

  const res = await fetch(urls.post(postId), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
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
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies().get('api_key')?.value}`,
    },
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
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies().get('api_key')?.value}`,
    },
    body: formDataToJson(formData),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to PUT Post');
  }

  return res.json();
};
