import {MDXRemote} from 'next-mdx-remote/rsc';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import FeatherIcon from '@/../public/feather.svg';

import './Post.css';

const Post = ({post, admin}) => {
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <div>
          <FeatherIcon />
          <time dateTime={post.updated_at}>
            {format(new Date(post.updated_at), 'yyyy MMMM do')}
          </time>
          <span>by</span>
          <span>Jack Flannery</span>
        </div>
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
