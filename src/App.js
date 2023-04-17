import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Login from './components/Login'
import { Route,Routes,} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      
        <Navbar/>
        <Hero />
        <About />
        
        
      
         <Routes>
      
         <Route path='/Login' element={<Login />}></Route>
          
           
         </Routes>  
        
         
      
    </div>
  );
}

export default App;
