import React, { useState } from 'react';

function KeypadInput() {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    // Prevent default actions for some keys (optional)
    if (['Backspace', 'Enter'].includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    const allowedChars = /^[0-9]+$/; // Only allow numbers
    if (!allowedChars.test(event.key)) {
      console.log('Invalid character entered:', event.key);
      return; // Prevent further processing for invalid characters
    }

    // Update state with the new value on key release
    setInputValue(inputValue + event.key);
  };

  const handleChange = (event) => {
    // This can be used for additional validation or formatting (optional)
    console.log('Input value changed:', event.target.value);
  };

  return (
    <div>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="text"
        id="numberInput"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
      />
    </div>
  );
}

export default KeypadInput;
