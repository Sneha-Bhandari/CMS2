
import { Routes, Route } from 'react-router-dom'
import Layout from "./HOC/Layout"
import Home from './Pages/Home'
import Recipies from './Pages/Recipies'
import Services from './Pages/Services'
import About from './Pages/About'
import News from './Pages/News'
import Contact from './Pages/Contact'

function App() {


  return (
    <>

      <Routes>
        
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path='/Recipies' element={<Recipies/>}></Route>
       <Route path='/Services' element={<Services/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/News' element={<News/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
   
    </>
  )
}

export default App
