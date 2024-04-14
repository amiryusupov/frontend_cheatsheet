import React, { useRef, useState } from 'react';

export function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? 'lightblue' : 'blue' }}
    >
      Hover Me!
    </button>
  );
}


import React, { useState } from 'react';

export function TooltipCard() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>This is a card.</p>
      {showTooltip && <div className="tooltip">More information about the card!</div>}
    </div>
  );
}