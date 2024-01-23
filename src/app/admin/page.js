import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import AuthForm from '@/components/AuthForm';

const AdminPage = () => {
  const key = cookies().get('api_key')?.value;
  if (key?.length) {
    redirect('/admin/blog');
  }

  return (
    <>
      <h1>Sign in</h1>
      <AuthForm />
    </>
  );
};

export default AdminPage;
