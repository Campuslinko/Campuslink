import React from 'react';

/**
 * Heading Component
 * Applies consistent heading styles using custom font sizes.
 *
 * @param {Object} props - Component props.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.as='h2'] - The HTML tag to render (e.g., 'h1', 'h2').
 * @param {'xl' | 'lg' | 'md' | 'sm'} [props.size='md'] - Semantic size mapping to custom font sizes.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes.
 * @param {React.ReactNode} props.children - Content of the heading.
 */
export const Heading = ({ as: Component = 'h2', size = 'md', className = '', children }) => {
  let fontSizeClass = '';
  switch (size) {
    case 'xl':
      // Uses custom 'heading-xl' 
      fontSizeClass = 'text-heading-xl';
      break;
    case 'lg':
      // Uses custom 'heading-lg' 
      fontSizeClass = 'text-heading-lg';
      break;
    case 'md':
      fontSizeClass = 'text-3xl'; 
      break;
    case 'sm':
      fontSizeClass = 'text-2xl'; 
      break;
    default:
      fontSizeClass = 'text-3xl';
  }

  return (
    <Component className={`font-bold ${fontSizeClass} ${className}`}>
      {children}
    </Component>
  );
};
