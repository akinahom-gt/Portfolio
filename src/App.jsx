import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { ssrImportKey } from 'vite/runtime'

function App() {

  return (
    <>
<div className="bg-[#eeedec] ">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route></Route>

  </Routes>
  </BrowserRouter>
</div>         </>
  )
}

export default App
