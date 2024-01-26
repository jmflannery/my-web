import Link from 'next/link';
import PropTypes from 'prop-types';

const postPath = (post, admin) => {
  const basePath = `${admin ? '/admin' : ''}/blog/posts`;
  return `${basePath}/${post.slug}`;
};

const PostListItem = ({post, admin}) => {
  return (
    <Link href={postPath(post, admin)}>
      <p>{post.title}</p>
    </Link>
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
