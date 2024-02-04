import { Routes , Route } from 'react-router-dom'

//page components
import Home from './pages/Home'
import About from './pages/About'
import Restaurant from './pages/Restaurant'
import Contact from './pages/Contact'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import HimkundComp from './components/HimkundComp'
import SunsetVillaComp from './components/SunsetVillaComp'
import B2bComp from "./components/B2bComp"

function App() {
  return (
    <div className="text-center font-bold">
      <Header/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='restaurant' element={<Restaurant/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='himkund' element={<HimkundComp/>}/>
          <Route path='sunset' element={<SunsetVillaComp/>}/>
          <Route path='b2b' element={<B2bComp />}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
