import HOME from "./components/HOME/HOME";
import { Route,Routes,} from 'react-router-dom';
import Login2 from './components/HOME/Login2';
import Register2 from'./components/HOME/Register2';


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
