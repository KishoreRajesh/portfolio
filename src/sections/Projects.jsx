import React, { useState } from 'react';
import { myProjects } from '../constants'; 
import Project from '../components/Project';
import { motion, useMotionValue, useSpring } from 'motion/react';

const Projects = () => {
  return (
    <section className=' mt-20 relative c-space h-auto' id='projects'>
      <h2 className='text-heading'>My Selected Projects</h2>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full' />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;