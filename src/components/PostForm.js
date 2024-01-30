import {redirect} from 'next/navigation';
import {createPost, updatePost} from '@/actions/posts';
import urls from '@/urls';

import './PostForm.css';

const PostForm = ({post}) => {
  const formPost = post || {title: '', slug: '', body: ''};

  const handleSubmit = async formData => {
    'use server';

    let res;
    if (formPost?.id) {
      res = await updatePost(formData, formPost.id);
    } else {
      res = await createPost(formData);
    }

    redirect(urls.web.admin.blog.post(res.slug));
  };

  return (
    <form action={handleSubmit}>
      <div className="formControl">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          defaultValue={formPost.title}
        />
      </div>
      <div className="formControl">
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          defaultValue={formPost.slug}
        />
      </div>
      <div className="formControl">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          placeholder="Body"
          rows="50"
          cols="65"
          defaultValue={formPost.body}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default PostForm;
