// src/components/Button.jsx
import React from 'react';

/**
 * Button Component
 * A versatile button with different visual variants.
 *
 * @param {Object} props - Component props.
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - Visual style of the button.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes.
 * @param {React.ReactNode} props.children - Content of the button.
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled.
 * @param {Function} [props.onClick] - Click handler for the button.
 * @param {string} [props.type='button'] - Type attribute for the button element.
 */
export const Button = ({ variant = 'primary', className = '', children, disabled = false, onClick, type = 'button' }) => {
  let baseStyles = 'py-3 px-6 text-lg font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      // Uses custom 'campus-blue' from tailwind.config.js
      variantStyles = 'bg-campus-blue text-white hover:bg-campus-blue-dark focus:ring-campus-blue';
      break;
    case 'secondary':
      // Uses custom 'gray' shades from tailwind.config.js
      variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      break;
    case 'outline':
      // Uses custom 'campus-blue' for border and text
      variantStyles = 'border border-campus-blue text-campus-blue hover:bg-campus-blue-light focus:ring-campus-blue';
      break;
    default:
      variantStyles = 'bg-campus-blue text-white hover:bg-campus-blue-dark focus:ring-campus-blue';
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
