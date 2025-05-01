import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'Arial'
    }}>
      <h1>Mi App React</h1>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center'
      }}>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '0.5rem 1rem' }}
        >
          -
        </button>
        <span style={{ fontSize: '2rem' }}>{count}</span>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '0.5rem 1rem' }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App
