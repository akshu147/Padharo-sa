"use client"
import React, { useRef, useEffect } from 'react';

const Pagey = () => {
  const elementRef = useRef(null);

  const getDistanceFromTop = () => {
      const elementPosition = elementRef.current.getBoundingClientRect()
      console.log("Distance from top of document:", elementPosition);
  };

  useEffect(() => {
    // Call the function on component mount
    getDistanceFromTop();

    // Optionally, you can trigger it when scrolling
    window.addEventListener('scroll', getDistanceFromTop);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', getDistanceFromTop);
  }, []);

  return (
    <div>
      <div style={{ height: '1000px' }}>Scroll down to see the distance</div>
      <div ref={elementRef} style={{ height: '200px', backgroundColor: 'lightblue' }}>
        Target Element
      </div>
    </div>
  );
};

export default Pagey;
