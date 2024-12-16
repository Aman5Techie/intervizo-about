import React from 'react';
import { technologies } from '../constants/technologies';
import SectionTitle from './ui/SectionTitle';
import IconWrapper from './ui/IconWrapper';

function TechnologyCard({ technology }) {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4 flex justify-center">
        <IconWrapper icon={technology.icon} size="large" />
      </div>
      <h3 className="text-xl">{technology.name}</h3>
    </div>
  );
}

function TechStack() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-white">Tech Stack</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;