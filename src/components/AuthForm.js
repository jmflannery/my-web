'use client';

import {authenticate} from '@/actions/authentication';

const AuthForm = () => {
  return (
    <form action={authenticate}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AuthForm;
