import { HomePage } from './pages/Homepage'
import { Routes, Route } from 'react-router'


import './App.css'

function App() {
    return (
      <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='checkout' element={ <div> Check our page</div>} />
        </Routes>
      
      </>
    )
}

export default App
