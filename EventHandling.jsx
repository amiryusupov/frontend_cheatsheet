import React, { useState } from 'react';

function InteractiveForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle changes in input fields
  const handleChange = (event) => {
    // Update state based on the event target (input)
    if (event.target.name === 'name') { // Check if the target is the "name" input
      setName(event.target.value);
    } else if (event.target.name === 'message') { // Check if the target is the "message" input
      setMessage(event.target.value);
    }
  };

  // Function to handle form submission (optional: prevent default behavior)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if(event.key === "Enter") { // If keyboard clicks to Enter, then submit the form
      console.log('Form submitted:', name, message);

      return
      // Return ensures that the code only performs the actions associated with the Enter key press and doesn't proceed further unless the Enter key was used.
    }

    console.log('Form submitted:', name, message);
    // Perform form submission logic here (e.g., send data to server)

    setName(" ")
    setMessage(" ")
  };

  // Function to handle key presses in input fields
  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key);
    // You can perform actions based on the pressed key here (e.g., submit on Enter)
  };

  // Function to handle mouse enter event on a specific element
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event on the same element
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button type="submit" disabled={!name || !message}>
        Submit
      </button>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: isHovered ? 'red' : 'black' }}
      >
        This text changes color on mouse hover!
      </div>
    </form>
  );
}

export default InteractiveForm;