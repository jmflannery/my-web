import Link from 'next/link';
import Image from 'next/image';
import SocialismIcom from '../../public/socialism.svg';
import links from '../links';

import './page.css';

const Home = () => {
  return (
    <main>
      <div>
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
            <h1>Jack Flannery</h1>
            <p>Full Stack Web Developer</p>
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
            <p>
              Hi, I&#39;m Jack Flannery. I&#39;m a girl dad and full stack web
              developer. I live in New Jersey with my wife Danielle and our
              daughter Olivia. Besides spending time with my family I enjoy
              tinkering with computer software, and riding various boards: snow,
              skate, wake, surf, etc. Our favorite thing to do is travel,
              we&#39;ve spent a lot of time on the road and in the sky. Trying
              to see as much of this earth as possible before our journey ends.
            </p>
            <p>
              I&#39;m a full stack web developer at Braidio. We&#39;re making
              some really interesting products and we use some pretty neat tools
              like React, React Native, Redux and Ruby on Rails. I&#39;ve always
              been drawn to computer programming I&#39;m very lucky to be able
              to do something I enjoy for a living. Braidio is a fully remote
              company so I can work from wherever I want. You can find me
              working at{' '}
              <a href="https://highlandscowork.com/">Highlands Cowork</a> or
              maybe in that corner of my bedroom that I call my office, or
              perhaps at some National Park inside a rental car. It&#39;s hard
              to know for sure.
            </p>
            <p>
              I&#39;m usually working on various side projects. You can find my
              blog here. I mostly write web development tutorials on topics that
              I&#39;m currenty working on, or any topics I&#39;m interested in
              and don&#39;t get to work with at my day job.
            </p>
          </div>
        </div>
        <div className="footer">
          <SocialismIcom />
        </div>
      </div>
    </main>
  );
};

export default Home;
