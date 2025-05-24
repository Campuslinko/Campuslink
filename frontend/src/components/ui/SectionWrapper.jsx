import React from 'react';

/**
 * SectionWrapper Component
 * Provides consistent max-width and horizontal padding for content sections.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes.
 * @param {React.ReactNode} props.children - Content to be wrapped.
 */
export const SectionWrapper = ({ className = '', children }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
