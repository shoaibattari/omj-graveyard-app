'use client'
import React, { useState, useEffect } from 'react';

const NumberIncrementer = ({ stopNumber }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        const nextNumber = prevNumber + 4  ;
        if (nextNumber >= stopNumber) {
          clearInterval(interval); // Stop the interval when the number reaches the stopNumber
          return stopNumber; // Ensure the number stops at stopNumber
        }
        return nextNumber;
      });
    }, 0); // Adjust the interval duration as needed
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, [stopNumber]);

  return (
    <div className="text-center text-4xl font-bold">
      {number.toLocaleString()} {/* Format the number with commas */}
    </div>
  );
};

export default NumberIncrementer;
