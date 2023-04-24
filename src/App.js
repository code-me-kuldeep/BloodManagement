import HOME from "./components/HOME";
import Table from "./components/Table";
import Cards from "./components/Cards";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Personal from "./components/Personal";
import Registration from './components/Register';
import { Route,Routes,} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
      <>
     

      <Routes>
          <Route path='/' element={<HOME/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Registration' element={<Registration/>}></Route>
          
      </Routes>  
        
        {/* <Hero/>
        <About/>
        <Cards/>
        <Table/> */}
        
      </>
    
  );
}

export default App;
