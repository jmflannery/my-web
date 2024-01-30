import React from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';

const PostTime = ({post, placeholder, dateFormat}) =>
  post.published_at ? (
    <time dateTime={post.updated_at}>
      {format(new Date(post.published_at), dateFormat)}
    </time>
  ) : (
    <span>{placeholder}</span>
  );

PostTime.propTypes = {
  post: PropTypes.object,
  placeholder: PropTypes.string,
};

PostTime.defaultProps = {
  placeholder: 'Unpublished',
  dateFormat: 'yyyy MMMM do',
};

export default PostTime;
