import React from 'react';
import { Link } from 'react-router-dom';

function Vision() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl text-gray-700 mb-8">
            We envision a world where technical interviews are more accessible, efficient, and engaging.
            Our platform breaks down barriers and creates opportunities for talent to shine, regardless
            of geographical boundaries.
          </p>
          <Link 
            to="/session-request"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Session Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Vision;