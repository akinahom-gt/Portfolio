import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { ssrImportKey } from 'vite/runtime'

function App() {

  return (
    <>
<div className=" h-screen bg-[#C7C6C1] ">
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