import Authorized from '@/components/Authorized';
import Blog from '@/components/Blog';
import urls from '@/urls';

const getProfile = async () => {
  const res = await fetch(urls.root);

  if (!res.ok) {
    throw new Error('Failed to fetch Profile');
  }

  return res.json();
};

const AdminBlogLayout = async ({children}) => {
  const profile = await getProfile();

  return (
    <Authorized>
      <div className="page">
        <Blog profile={profile}>{children}</Blog>
      </div>
    </Authorized>
  );
};

export default AdminBlogLayout;
