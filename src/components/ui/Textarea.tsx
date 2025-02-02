import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} className="border rounded-md p-2 w-full" />;
};

export default Textarea;
