import PropTypes from 'prop-types';
import PostListItem from '@/components/PostListItem';

import './PostsList.css';

const PostsList = ({posts}) => {
  return (
    <ul className="posts">
      {posts.map(post => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </ul>
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PostsList.defaultProps = {
  posts: [],
};
