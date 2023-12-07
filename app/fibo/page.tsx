"use client"

// ./app/page.tsx
import React, { useEffect, useState } from 'react';
import './App.css';

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

  // Function to generate the first 30 Fibonacci numbers
  const generateFibonacci = (): number[] => {
    const sequence: number[] = [0, 1];

    for (let i = 2; i < 30; i++) {
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

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Fibonacci Sequence</h1>
      <div className="table-container">
        <table className="w-4/5 m-auto mt-8 border-collapse rounded-full">
          <thead>
            <tr>
              <th className="border p-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-t-md">Index</th>
              <th className="border p-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-t-md">Number</th>
            </tr>
          </thead>
          <tbody>
            {fibonacciSequence.map((number, index) => (
              <tr key={index}>
                <td className="border p-4 text-center">{index}</td>
                <td className="border p-4 text-center">{number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;






