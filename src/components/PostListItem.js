import Link from 'next/link';
import PropTypes from 'prop-types';
import PostTime from '@/components/PostTime';

import './PostListItem.css';

const postPath = (post, admin) => {
  const basePath = `${admin ? '/admin' : ''}/blog/posts`;
  return `${basePath}/${post.slug}`;
};

const PostListItem = ({post, admin}) => {
  return (
    <li className="postItem">
      <Link href={postPath(post, admin)}>
        <PostTime post={post} />
        <p>{post.title}</p>
      </Link>
    </li>
  );
};

export default PostListItem;

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  admin: PropTypes.bool,
};

PostListItem.defaultProps = {
  admin: false,
};
