const apiUrl = process.env.API_DOMAIN;

const urls = {
  web: {
    home: '/',
    blog: {
      root: '/blog',
      posts: '/blog/posts',
      post: slug => `/blog/posts/${slug}`,
    },
    admin: {
      root: '/admin',
      blog: {
        root: '/admin/blog',
        posts: '/admin/blog/posts',
        new: 'admin/blog/posts/new',
        post: slug => `/admin/blog/posts/${slug}`,
        edit: slug => `/admin/blog/posts/${slug}/edit`,
      },
    },
  },
  api: {
    root: apiUrl,
    sessions: `${apiUrl}/sessions`,
    posts: `${apiUrl}/posts`,
    post: id => `${apiUrl}/posts/${id}`,
    publishPost: id => `${apiUrl}/posts/${id}/publish`,
    unpublishPost: id => `${apiUrl}/posts/${id}/unpublish`,
  },
};

export default urls;
