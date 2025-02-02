import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className="border rounded-md p-2 w-full" />;
};

export default Input;
