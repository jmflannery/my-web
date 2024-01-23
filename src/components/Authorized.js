import {authorize} from '@/actions/authentication';

const Authorized = ({children}) => {
  authorize();

  return children;
};

export default Authorized;
