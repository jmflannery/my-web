import Blog from '@/components/Blog';
import urls from '@/urls';

const getProfile = async () => {
  const res = await fetch(urls.api.root);

  if (!res.ok) {
    throw new Error('Failed to fetch Profile');
  }

  return res.json();
};

const BlogLayout = async ({children}) => {
  const profile = await getProfile();

  return (
    <div className="page">
      <Blog profile={profile}>{children}</Blog>
    </div>
  );
};

export default BlogLayout;
