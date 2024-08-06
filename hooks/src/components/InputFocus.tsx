"use client";

import React, { useRef } from 'react';

const InputFocus: React.FC = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  const onFocusClick = () => {
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={onFocusClick}>Focus on the input</button>
    </div>
  );
};

export default InputFocus;
