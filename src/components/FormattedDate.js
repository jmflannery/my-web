import PropTypes from 'prop-types';
import {format} from 'date-fns';

const FormattedDate = ({dateString, formatString}) => {
  if (
    ['Present'].map(n => n.toLowerCase()).includes(dateString.toLowerCase())
  ) {
    return dateString;
  }
  const date = new Date(dateString);

  return <time dateTime={date}>{format(new Date(date), formatString)}</time>;
};

FormattedDate.propTypes = {
  dateString: PropTypes.string,
  formatString: PropTypes.string,
};

FormattedDate.defaultProps = {
  formatString: 'yyyy MMMM do',
};

export default FormattedDate;
