import {redirect} from 'next/navigation';
import {createPost, updatePost} from '@/actions/posts';
import './PostForm.css';

const PostForm = ({post}) => {
  const tempPost = post || {title: '', slug: '', body: ''};

  const handleSubmit = async formData => {
    'use server';

    let res;
    if (tempPost?.id) {
      res = await updatePost(formData, tempPost.id);
    } else {
      res = await createPost(formData);
    }

    redirect(`/admin/blog/posts/${res.slug}`);
  };

  return (
    <form action={handleSubmit}>
      <div className="formControl">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          defaultValue={tempPost.title}
        />
      </div>
      <div className="formControl">
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          defaultValue={tempPost.slug}
        />
      </div>
      <div className="formControl">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          placeholder="Body"
          rows="50"
          cols="65"
          defaultValue={tempPost.body}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default PostForm;
