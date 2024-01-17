'use client';

import {useRouter} from 'next/navigation';
import urls from '../../../urls';

const authenticate = async (email, password) => {
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

  return res.json();
};

const getCookies = async () => {
  console.log(cookieStore);
  const cooks = await cookieStore.getAll();
  console.log('cookies:');
  console.log(cooks);
};

const AuthForm = () => {
  const router = useRouter();
  getCookies();

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Form Values:');
    const email = event.target[0].value;
    const password = event.target[1].value;
    const res = await authenticate(email, password);
    console.log(res);
    getCookies();
    router.push('/blog/posts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AuthForm;
