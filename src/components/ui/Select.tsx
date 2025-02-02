import React from 'react';

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return <select {...props} className="border rounded-md p-2 w-full">{props.children}</select>;
};

export default Select;
