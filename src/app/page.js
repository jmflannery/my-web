import Link from 'next/link';
import Image from 'next/image';
import {MDXRemote} from 'next-mdx-remote/rsc';

import SocialismIcom from '../../public/socialism.svg';
import links from '../links';
import urls from '../urls';

import './page.css';

const getProfile = async () => {
  const res = await fetch(urls.api.root);

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
          {links.map(({href, name, Component}, index) => (
            <Link
              href={href}
              key={index}
              target={href.startsWith('http') ? '_blank' : '_self'}
            >
              <Component />
              <span>{name}</span>
            </Link>
          ))}
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
