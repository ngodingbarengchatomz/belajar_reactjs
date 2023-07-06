import { useState } from 'react'
import './App.css'

function App() {
  const [jumlah, setJumlah] = useState(10)

  const kurangiJumlah = () => {
    if (jumlah > 0) {
      setJumlah((jumlah) => jumlah - 1)
    }
  }

  const refresh = () => {
    setJumlah(10)
  }
  return (
    <>
    
      <div className="card">
        <button onClick={kurangiJumlah}>
           Jumlahnya adalah {jumlah}
        </button>
        <button className='btn-primary' onClick={refresh}>Refresh</button>
      </div>
    </>
  )
}

export default App
