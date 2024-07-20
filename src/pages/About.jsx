import React from 'react';
import MembersComponent from '../components/Members/MembersComponent';
import gourmet from '../components/about.module.css';

const About = () => {
  return (
    <section className={gourmet.about}>
      <div className={gourmet.container_about}>
        <h2 className={gourmet.title_members}>Member's and Roles</h2>
        <MembersComponent />
      </div>
    </section>
  );
};

export default About;