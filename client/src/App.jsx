
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styled from'./App.module.css'
import { HomePage, LandingPage, DetailPage, FormPage} from './views'
import { Routes, Route  } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
