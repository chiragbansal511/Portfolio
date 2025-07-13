// CustomCursor.js
import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Hide cursor if screen width is 768px or less (e.g., mobile devices)
      setShowCursor(window.innerWidth > 768);
    };

    handleResize(); // Initial check on mount

    window.addEventListener('resize', handleResize); // Listen to screen resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  if (!showCursor) return null;

  return (
    <AnimatedCursor
      innerSize={5}
      outerSize={40}
      color="117, 78, 249"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 5,
            outerSize: 5,
            color: '117, 78, 249',
            outerAlpha: 0.2,
            innerScale: 0.2,
            outerScale: 2
          }
        }
      ]}
    />
  );
};

export default CustomCursor;
