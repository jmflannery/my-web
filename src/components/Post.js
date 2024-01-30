import {MDXRemote} from 'next-mdx-remote/rsc';
import PropTypes from 'prop-types';
import FeatherIcon from '@/../public/feather.svg';
import PostTime from '@/components/PostTime';
import PostControls from '@/components/PostControls';

import './Post.css';

const Post = ({post, admin}) => {
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <div className="meta">
          <FeatherIcon />
          <PostTime post={post} />
          <span>
            <em>by</em> Jack Flannery
          </span>
        </div>
        {admin && <PostControls post={post} />}
      </header>
      <MDXRemote source={post.body} />
    </article>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object,
  admin: PropTypes.bool,
};

Post.defaultProps = {
  admin: false,
};
