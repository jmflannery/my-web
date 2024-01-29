'use client';

import Link from 'next/link';
import EditIcon from '@/../public/edit.svg';
import PublishIcon from '@/../public/publish.svg';
import TrashIcon from '@/../public/trash.svg';
import {publishPost, unpublishPost, deletePost} from '@/actions/posts';

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
      await deletePost(post);
    }
  };

  return (
    <div className="controls">
      <Link href={`/admin/blog/posts/${post.slug}/edit`}>
        <EditIcon />
      </Link>
      <a onClick={handlePublished}>
        <PublishIcon />
      </a>
      <a onClick={handleDelete}>
        <TrashIcon />
      </a>
    </div>
  );
};

export default PostControls;
