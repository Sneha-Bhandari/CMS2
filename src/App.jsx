
import { Routes, Route } from 'react-router-dom'
import Layout from "./HOC/Layout"
import Home from './Pages/Home'
import Recipies from './Pages/Recipies'
import Services from './Pages/Services'
import About from './Pages/About'
import News from './Pages/News'
import Contact from './Pages/Contact'
import Menu from './Component/PageComponent/OurMenu/menu'
import PostTestimony from './Component/PageComponent/Testimony/PostTestimony'
import PostChefs from './Component/PageComponent/Chefs/PostChefs'
import PostItem from './Component/PageComponent/ServicesItem/PostItem'

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
       <Route path='/Menu' element={<Menu/>}></Route>
       <Route path='/PostTestimony' element={<PostTestimony/>}></Route>
       <Route path='/PostChefs' element={<PostChefs/>}></Route>
       <Route path='/PostItem' element={<PostItem/>}></Route>



        </Route>
      </Routes>
   
    </>
  )
}

export default App
