const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const urls = {
  root: baseUrl,
  sessions: `${baseUrl}/sessions`,
  posts: `${baseUrl}/posts`,
  post: slug => `${baseUrl}/posts/${slug}`,
};

export default urls;
