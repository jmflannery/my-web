import React from 'react';
import resume from '@/resume.json';
import Resume from '@/components/Resume';

const ResumePage = () => {
  return (
    <div className="page">
      <Resume resume={resume} />
    </div>
  );
};

export default ResumePage;
