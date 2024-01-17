import urls from '../../urls';

const getProfile = async () => {
  const res = await fetch(urls.root);

  if (!res.ok) {
    throw new Error('Failed to fetch Profile');
  }

  return res.json();
};

const BlogLayout = async ({children}) => {
  const profile = await getProfile();

  return (
    <div className="weblog">
      <nav>{`The Weblog of ${profile.name}`}</nav>
      {children}
    </div>
  );
};

export default BlogLayout;
