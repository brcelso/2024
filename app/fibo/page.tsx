"use client"

// ./app/page.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import styles from './App.module.css'; // Create a separate CSS module for styling
import Image from 'next/image';
import Calculator from '../calc/calculator'

// Use the "use client" pragma to mark the component as a client entry
// This is necessary because useState is not available in server components
// Marking the component as a client entry ensures it is only rendered on the client side
// You can add this comment at the top of your file
// @ts-ignore
// @jsxImportSource react/jsx-runtime
// @jsxImportSource react
// @jsxImportSource react-server
function App() {
  const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);
  const [userIndex, setUserIndex] = useState<number | null>(null);

  // Function to generate the first 100 Fibonacci numbers
  const generateFibonacci = (): number[] => {
    const sequence: number[] = [0, 1];

    for (let i = 2; i < 100; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
  };

  // Effect to generate and set the Fibonacci sequence on component mount
  useEffect(() => {
    const sequence = generateFibonacci();
    setFibonacciSequence(sequence);
  }, []);

  // Function to handle user input and display result
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputIndex = parseInt(e.target.value, 10);

    // Validate that inputIndex is not null or undefined and is a valid index
    if (!isNaN(inputIndex) && inputIndex >= 0 && inputIndex < fibonacciSequence.length) {
      setUserIndex(inputIndex);
    } else {
      setUserIndex(null);
    }
  };

  // Function to handle slider input and display result
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue = parseInt(e.target.value, 10);
    setUserIndex(sliderValue);
  };
  
  return (
    <div className="App">
      <div className="flex justify-center mt-4">
      <div className={styles.roundedImageWrapper}>
        <Image
          src="/leo.jpg" // Replace with the correct path
          alt="Example"
          width={500} // Set the width of the image
          height={300} // Set the height of the image
          className={`${styles.circularImage}`}
        />
      </div>
    </div>

      <div className="flex justify-center mt-4">
        <label className="mr-2">Select Index:</label>
        <input
          type="range"
          min="0"
          max="99"
          value={userIndex !== null ? userIndex : ''}
          onChange={handleSliderChange}
          className="p-2 border"
        />
        <span className="ml-2">{userIndex}</span>
      </div>

      {userIndex !== null && (
        <div className="table-container">
          <table className="w-4/5 m-auto mt-8 border-collapse rounded-md">
            <thead>
              <tr>
                <th className="border p-2 bg-sea-aqua text-white rounded-t-md">Index</th>
                <th className="border p-2 bg-sea-aqua text-white rounded-t-md">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-sea-aqua-light">
                <td className="border p-2 text-center">{userIndex}</td>
                <td className="border p-2 text-center">{fibonacciSequence[userIndex]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
        <Calculator></Calculator>
    </div>

  );
}

export default App;















