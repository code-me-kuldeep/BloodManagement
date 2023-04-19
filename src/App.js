import HOME from "./components/HOME";
import Table from "./components/Table";
import Cards from "./components/Cards";
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Login from './components/Login'
import { Route,Routes,} from 'react-router-dom';

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HOME/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          
      </Routes>  
        
        {/* <Hero/>
        <About/>
        <Cards/>
        <Table/> */}
        
      </>
    
  );
}

export default App;
