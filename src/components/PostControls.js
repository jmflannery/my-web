'use client';

import Link from 'next/link';

import EditIcon from '@/../public/edit.svg';
import PublishIcon from '@/../public/publish.svg';
import TrashIcon from '@/../public/trash.svg';
import {publishPost, unpublishPost, deletePost} from '@/actions/posts';
import urls from '@/urls';

import './PostControls.css';

const PostControls = ({post}) => {
  const handlePublished = async () => {
    if (post.published_at) {
      await unpublishPost(post);
    } else {
      await publishPost(post);
    }
  };

  const handleDelete = async () => {
    if (confirm(`Do you really want to delete this Post: ${post.title}?`)) {
      await deletePost(post, urls.web.admin.blog.posts);
    }
  };

  return (
    <div className="controls">
      <Link href={`/admin/blog/posts/${post.slug}/edit`}>
        <EditIcon />
      </Link>
      <button onClick={handlePublished}>
        <PublishIcon />
      </button>
      <button onClick={handleDelete}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default PostControls;
