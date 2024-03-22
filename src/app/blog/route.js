import {redirect} from 'next/navigation';
import {fetchPosts} from '@/actions/posts';
import urls from '@/urls';

export const GET = async _request => {
  const posts = await fetchPosts();
  const post = posts?.[0];

  if (post?.published_at) {
    redirect(urls.web.blog.post(post.slug));
  } else {
    redirect(urls.web.blog.posts);
  }
};
