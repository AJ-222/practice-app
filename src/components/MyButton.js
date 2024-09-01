import React from 'react';
import '../Styles/MyButton.css'; // Assuming you have a CSS file for styling


export default function MyButton({ variant, children, ...props }) {
  // Apply different styles based on the variant prop
  const className = variant === 'primary' ? 'primary-button' : 'secondary-button';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
