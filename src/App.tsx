import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result] = useState(null);

  const handleCalculate = () => {};

  return (
    <main style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        alt='String Calculator'
        height={400}
      />

      <h1>String Calculator</h1>

      <label htmlFor='numbers' style={{ fontSize: '20px', display: 'block' }}>Enter numbers</label>

      <textarea
        style={{ margin: '10px 0', color: '#aaa' }}
        placeholder='Enter numbers'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name='numbers'
        aria-labelledby='input-label'
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          display: 'block',
        }}>
        Calculate
      </button>

      {result !== null && <p style={{ color: 'green' }}>Result: {result}</p>}

      <div role='alert'>
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </main>
  );
};

export default App;
