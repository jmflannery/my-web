'use client';

import {useRouter} from 'next/navigation';
import urls from '../../../../../urls';

import './PostForm.css';

const createPost = async (title, slug, body) => {
  const res = await fetch(urls.posts, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({title, slug, body}),
  });

  if (!res.ok) {
    throw new Error('Failed to POST Post');
  }

  return res.json();
};

const PostForm = () => {
  const router = useRouter();

  const handleSubmit = async event => {
    const title = event.target[0].value;
    const slug = event.target[1].value;
    const body = event.target[2].value;
    const post = await createPost(title, slug, body);
    router.push(`/blog/posts/${post.slug}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
      </div>
      <div className="form-control">
        <label htmlFor="slug">Slug</label>
        <input type="text" name="slug" />
      </div>
      <div className="form-control">
        <label htmlFor="body">Body</label>
        <textarea name="body" rows="50" cols="100" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default PostForm;
