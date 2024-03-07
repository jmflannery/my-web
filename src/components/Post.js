import {MDXRemote} from 'next-mdx-remote/rsc';
import PropTypes from 'prop-types';

import FeatherIcon from '@/../public/feather.svg';
import PostTime from '@/components/PostTime';
import PostControls from '@/components/PostControls';
import PostsBackLink from '@/components/PostsBackLink';

import './Post.css';

const Post = ({post, admin}) => {
  return (
    <article>
      <header>
        <PostsBackLink admin={admin} />
        <h1>{post.title}</h1>
        {post.description && <h2>{post.description}</h2>}
        <div className="meta">
          <p>
            <em>by</em>Jack Flannery
          </p>
          <p>
            <FeatherIcon />
            <PostTime post={post} />
          </p>
        </div>
        {admin && <PostControls post={post} />}
      </header>
      <MDXRemote source={post.body} />
      <footer>
        <PostsBackLink admin={admin} />
      </footer>
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
