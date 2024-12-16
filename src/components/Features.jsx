import React from 'react';
import { features } from '../constants/features';
import SectionTitle from './ui/SectionTitle';
import IconWrapper from './ui/IconWrapper';

function FeatureCard({ feature }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-blue-600 mb-4 flex justify-center">
        <IconWrapper icon={feature.icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Core Features</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;