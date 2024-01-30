import {redirect} from 'next/navigation';
import {fetchLatestPost} from '@/actions/posts';
import urls from '@/urls';

export const GET = async _request => {
  const post = await fetchLatestPost();

  if (post?.published_at) {
    redirect(urls.web.blog.post(post.slug));
  } else {
    redirect(urls.web.blog.posts);
  }
};
