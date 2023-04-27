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
import Login2 from './components/Login2';
import Register2 from'./components/Register2';
import Forgot from './components/Forgot';
import Donate from "./components/Donate";
import Required from "./components/Required";

function App() {
  return (
      <>
     
     

      
      {/* <Navbar/>
        <Hero/>
        <About/>
        <Cards/>
        <Table/>
        <Contact/> */}
        {/* <HOME/> */}
        <Routes>
          <Route path='/' element={<HOME/>}></Route>
          <Route  path='/Login2' element={<Login2/>}></Route>
          <Route path='/Register2' element={<Register2/>}></Route>
        </Routes>  
        
        {/* <Hero/>
        <About/>
        <Cards/>
        <Table/> */}
        
      </>
    
  );
}

export default App;
