import PropTypes from 'prop-types';
import PostListItem from '@/components/PostListItem';

import './PostsList.css';

const PostsList = ({posts, admin}) => {
  return (
    <ul className="posts">
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} admin={admin} />;
      })}
    </ul>
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  admin: PropTypes.bool,
};

PostsList.defaultProps = {
  posts: [],
  bool: false,
};
