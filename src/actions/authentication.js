'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import urls from '../urls';

const parseAuthorizationToken = headers => {
  const authHeader = headers.get('Authorization');
  const match = authHeader.match(/^Token (?<token>.+)$/);
  return match?.groups?.token;
};

const auth = async (email, password) => {
  const res = await fetch(urls.sessions, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({email, password}),
  });

  if (!res.ok) {
    throw new Error('Failed to Authenticate');
  }

  return parseAuthorizationToken(res.headers);
};

export const authenticate = async formData => {
  console.log('Authenticate Action!!');
  const email = formData.get('email');
  const password = formData.get('password');
  const apiKey = await auth(email, password);

  cookies().set('api_key', apiKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  redirect('/admin/blog');
};

export const authorize = () => {
  if (cookies().get('api_key')?.value?.length) {
    return;
  }

  redirect('/admin');
};
