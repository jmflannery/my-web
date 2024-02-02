import Link from 'next/link';

import FormattedDate from './FormattedDate';

import './Resume.css';

const Resume = ({resume}) => {
  return (
    <div className="resume">
      <header>
        <h1>{resume.name}</h1>
        <div>
          <span>{resume.title}</span>
          <span>{' - '}</span>
          <span>{resume.location}</span>
        </div>
        <div>
          <Link href={`mailto:${resume.email}`}>{resume.email}</Link>
          <Link href="/">{resume.website}</Link>
        </div>
      </header>
      <main>
        <section>
          <h2>Skills and Technology</h2>
          <ul className="skills">
            {resume.skills.map((skill, index) => (
              <li key={index}>
                <code>{skill}</code>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          {resume.experience.map((work, index) => (
            <div className="work" key={index}>
              <div>
                <span>{work.title}</span>
                <span>{`${work.company} - ${work.location}`}</span>
                <span>
                  <FormattedDate
                    dateString={work.started_on}
                    formatString="MMM yyyy"
                  />
                  {' - '}
                  <FormattedDate
                    dateString={work.ended_on}
                    formatString="MMM yyyy"
                  />
                </span>
              </div>
              <ul>
                {work.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            {resume.education.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Resume;
