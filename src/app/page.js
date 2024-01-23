import Link from 'next/link';
import Image from 'next/image';
import {MDXRemote} from 'next-mdx-remote/rsc';

import SocialismIcom from '../../public/socialism.svg';
import links from '../links';
import urls from '../urls';

import './page.css';

const getProfile = async () => {
  const res = await fetch(urls.root);

  if (!res.ok) {
    throw new Error('Failed to fetch Profile');
  }

  return res.json();
};

const Home = async () => {
  const profile = await getProfile();

  return (
    <div className="home">
      <main>
        <div className="profile">
          <Image
            src="https://jacksassets.nyc3.digitaloceanspaces.com/me_with_palm_trees.sm.webp"
            width={280}
            height={280}
            alt="the author"
          />
        </div>
        <div className="header">
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
          </div>
        </div>
        <div className="links">
          <div>
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <link.Component />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="content">
          <div>
            <MDXRemote source={profile.bio} />
          </div>
        </div>
        <div className="footer">
          <SocialismIcom />
        </div>
      </main>
    </div>
  );
};

export default Home;
