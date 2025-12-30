import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  // Inline styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
    color: theme === 'light' ? '#333' : '#fff',
    transition: 'all 0.3s ease'
  }

  const headerStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: theme === 'light' ? '#646cff' : '#8a8aff',
    textAlign: 'center'
  }

  const cardStyle = {
    background: theme === 'light' ? 'white' : '#242424',
    padding: '2.5rem',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    minWidth: '300px',
    margin: '1.5rem 0',
    border: `2px solid ${theme === 'light' ? '#646cff' : '#8a8aff'}`
  }

  const countStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    color: theme === 'light' ? '#333' : '#fff'
  }

  const buttonStyle = {
    padding: '0.8rem 1.8rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    margin: '0.5rem',
    fontWeight: 'bold',
    transition: 'all 0.2s'
  }

  const primaryBtnStyle = {
    ...buttonStyle,
    background: theme === 'light' ? '#646cff' : '#8a8aff',
    color: 'white'
  }

  const secondaryBtnStyle = {
    ...buttonStyle,
    background: theme === 'light' ? '#ff6464' : '#ff8a8a',
    color: 'white'
  }

  const toggleBtnStyle = {
    ...buttonStyle,
    background: 'transparent',
    border: `2px solid ${theme === 'light' ? '#646cff' : '#8a8aff'}`,
    color: theme === 'light' ? '#646cff' : '#8a8aff'
  }

  // Button hover effects
  const addHover = (baseStyle) => ({
    ...baseStyle,
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
    }
  })

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </h1>
      
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
          Interactive Counter
        </h2>
        
        <div style={countStyle}>
          {count}
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <button 
            style={addHover(primaryBtnStyle)}
            onClick={incrementCount}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Increment (+)
          </button>
          
          <button 
            style={addHover(secondaryBtnStyle)}
            onClick={decrementCount}
            disabled={count <= 0}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Decrement (-)
          </button>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <button 
            style={addHover({
              ...buttonStyle,
              background: '#64ff64',
              color: '#333'
            })}
            onClick={() => setCount(count + 10)}
          >
            Add 10
          </button>
          
          <button 
            style={addHover({
              ...buttonStyle,
              background: '#ff64ff',
              color: '#333'
            })}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
      
      <div style={cardStyle}>
        <h3>Theme Controls</h3>
        <p style={{ margin: '1rem 0' }}>
          Current count: <strong>{count}</strong>
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Status: {count === 0 ? 'Start counting!' : count > 10 ? 'High!' : 'Keep going!'}
        </p>
        
        <button 
          style={addHover(toggleBtnStyle)}
          onClick={toggleTheme}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>Made with React + Vite • All styles are inline</p>
        <div style={{ fontSize: '0.9rem', color: theme === 'light' ? '#666' : '#aaa' }}>
          Hot Reload enabled: Try changing the code!
        </div>
      </div>
    </div>
  )
}

export default App