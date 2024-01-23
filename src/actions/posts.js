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
      credentials: 'include',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return res.json();
};
