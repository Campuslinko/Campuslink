// src/components/Card.jsx
import React from "react";

/**
 * Card Component
 * A customizable container for content with various visual styles, padding sizes,
 * aspect ratios, and overflow behavior.
 *
 * @param {Object} props - Component props.
 * @param {'primary' | 'secondary' | 'outline' | 'flat'} [props.variant='primary'] - Visual style of the card.
 * - 'primary': Uses brand primary color for background.
 * - 'secondary': Standard white background with default text color.
 * - 'outline': White background with a border in the primary color.
 * - 'flat': White background, subtle shadow, no extra border/accent.
 * @param {'sm' | 'md' | 'lg'} [props.paddingSize='md'] - Controls the internal padding of the card.
 * @param {'none' | '16/9' | '4/3' | '1/1'} [props.aspectRatio='none'] - Sets a fixed aspect ratio for the card.
 * 'none' means no fixed aspect ratio.
 * @param {'auto' | 'hidden' | 'scroll'} [props.overflow='auto'] - Controls content overflow behavior.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply directly to the card div.
 * Use this for external sizing (e.g., `w-full`, `max-w-md`, `h-48`) or custom layout.
 * @param {React.ReactNode} props.children - Content to be displayed inside the card.
 */
export const Card = ({
  variant = "secondary",
  paddingSize = "md",
  aspectRatio = "none", // New prop
  overflow = "auto",    // New prop
  className = "",
  children
}) => {
  let cardPaddingClass = '';
  let variantStyles = "";
  let aspectRatioClass = ''; // Class for aspect ratio
  let overflowClass = '';    // Class for overflow
  let baseStyles = 'rounded-lg shadow-card-subtle'; // Common base styles

  // Determine padding based on paddingSize prop
  switch (paddingSize) {
    case 'sm':
      cardPaddingClass = 'p-4'; // Smaller padding
      break;
    case 'md':
      cardPaddingClass = 'p-6 sm:p-8'; // Default padding, responsive
      break;
    case 'lg':
      cardPaddingClass = 'p-8 sm:p-10 lg:p-12'; // Larger padding
      break;
    default:
      cardPaddingClass = 'p-6 sm:p-8';
  }

  // Determine variant specific styles
  switch (variant) {
    case "primary":
      variantStyles = "bg-campus-blue text-white";
      break;
    case "secondary":
      variantStyles = "bg-white text-gray-800";
      break;
    case "outline":
      variantStyles = "bg-white border border-campus-blue text-gray-800";
      break;
    case "flat":
      variantStyles = "bg-white text-gray-800 shadow-sm";
      break;
    default:
      variantStyles = "bg-white text-gray-800";
  }

  // Determine aspect ratio class
  switch (aspectRatio) {
    case '16/9':
      aspectRatioClass = 'aspect-w-16 aspect-h-9'; // Tailwind's aspect-ratio plugin
      break;
    case '4/3':
      aspectRatioClass = 'aspect-w-4 aspect-h-3';
      break;
    case '1/1':
      aspectRatioClass = 'aspect-w-1 aspect-h-1';
      break;
    case 'none':
    default:
      aspectRatioClass = '';
  }

  // Determine overflow class
  switch (overflow) {
    case 'hidden':
      overflowClass = 'overflow-hidden';
      break;
    case 'scroll':
      overflowClass = 'overflow-scroll';
      break;
    case 'auto':
    default:
      overflowClass = 'overflow-auto'; // Default browser behavior for overflow
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${cardPaddingClass} ${aspectRatioClass} ${overflowClass} ${className}`}>
      {children}
    </div>
  );
};
