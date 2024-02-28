import Link from 'next/link';
import Image from 'next/image';
import CoffeeCodeIcon from '../../public/coffee-code.svg';

import './Blog.css';

const Blog = ({profile, children}) => {
  return (
    <div className="blog">
      <header>
        <nav>
          <Link href="/">
            <Image
              src="https://jacksassets.nyc3.digitaloceanspaces.com/me_with_palm_trees.sm.webp"
              width={88}
              height={88}
              alt="the author"
            />
          </Link>
          <Link href="/blog">
            <p>
              <span>Jack&#39;s</span>
              <span>Weblog</span>
            </p>
          </Link>
          <Link href="/blog">
            <CoffeeCodeIcon />
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; Jack Flannery 2024</footer>
    </div>
  );
};

export default Blog;
