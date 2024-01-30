import Link from 'next/link';
import PropTypes from 'prop-types';

import BackHand from '@/../public/back-hand.svg';
import urls from '@/urls';

import './PostsBackLink.css';

export const PostsBackLink = ({admin, text}) => {
  const path = admin ? urls.web.admin.blog.posts : urls.web.blog.posts;

  return (
    <Link href={path} className="postsBack">
      <BackHand />
      <p>{text}</p>
    </Link>
  );
};

export default PostsBackLink;

PostsBackLink.propTypes = {
  admin: PropTypes.bool,
  text: PropTypes.string,
};

PostsBackLink.defaultProps = {
  admin: false,
  text: 'Back to all Posts',
};
