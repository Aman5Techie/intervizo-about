import React from 'react';

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-4xl font-bold text-center mb-16 ${className}`}>
      {children}
    </h2>
  );
}

export default SectionTitle;