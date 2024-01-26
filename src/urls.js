const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const urls = {
  root: baseUrl,
  sessions: `${baseUrl}/sessions`,
  posts: `${baseUrl}/posts`,
  post: id => `${baseUrl}/posts/${id}`,
};

export default urls;
