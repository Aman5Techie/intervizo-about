import React from 'react';
import { steps } from '../constants/steps';
import SectionTitle from './ui/SectionTitle';

function Step({ step, isLast }) {
  return (
    <div className="w-full md:w-1/4 px-4 mb-8">
      <div className="relative mx-28">
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
          {step.number}
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-6 left-12 w-[650%] h-0.5 bg-blue-300" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>How It Works</SectionTitle>
        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <Step 
            key={index} 
            step={step} 
            isLast={index === steps.length - 1} 
          />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;