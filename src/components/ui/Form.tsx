import React from 'react';

const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <form className="space-y-4">{children}</form>;
};

export default Form;
