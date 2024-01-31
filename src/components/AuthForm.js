'use client';

import {authenticate} from '@/actions/authentication';

import './AuthForm.css';

const AuthForm = () => {
  return (
    <form action={authenticate} className="authForm">
      <div className="formControl">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div className="formControl">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AuthForm;
