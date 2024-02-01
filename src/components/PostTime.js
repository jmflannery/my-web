import PropTypes from 'prop-types';

import FormattedDate from './FormattedDate';

const PostTime = ({post, placeholder, formatString}) =>
  post.published_at ? (
    <FormattedDate dateString={post.published_at} formatString={formatString} />
  ) : (
    <span>{placeholder}</span>
  );

PostTime.propTypes = {
  post: PropTypes.object,
  placeholder: PropTypes.string,
};

PostTime.defaultProps = {
  placeholder: 'Unpublished',
  formatString: 'yyyy MMMM do',
};

export default PostTime;
