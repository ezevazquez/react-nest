function App() {
  return (
    <div className="container">
        <button onClick={async () => {
        const response = await fetch('/api')
        const data = await response.text()
        console.log(data)
      }}>
        Tocame
      </button>
    </div>
  )
}

export default App