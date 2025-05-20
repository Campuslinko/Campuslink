import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold text-blue-600">Blue Text</h1>
      <p className="text-green-500 text-lg">Green Text</p>
      <p className="text-red-500 text-lg">Red Text</p>
      <p className="text-purple-600 text-lg">Purple Text</p>
      <p className="text-yellow-500 text-lg">Yellow Text</p>
      <p className="text-pink-500 text-lg">Pink Text</p>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Test Button
      </button>
    </div>
    </>
  )
}

export default App
