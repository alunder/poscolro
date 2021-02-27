import Minimal from 'components/Layout/Minimal';
import { withAuth } from 'lib/auth';
import cookie from 'cookie';

const Login = ({ currentUser, ...props }) => {
  return <Minimal>Hello, {currentUser.email}</Minimal>;
};

export default withAuth(Login);
