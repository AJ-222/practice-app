import React from 'react';
import '../Styles/MyButton.css'; 

export default function MyButton({ variant, children, ...props }) {
  const className = variant === 'primary' ? 'primary-button' : 'secondary-button';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
