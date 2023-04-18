import Table from "./components/Table";
import Cards from "./components/Cards";
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Login from './components/Login'
import { Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
           <Route path='/Login' element={<Login />}></Route>
      </Routes>  
        <Navbar/>
        <Hero/>
        <About/>
        <Cards/>
        <Table/>
        
      </>
    </div>
  );
}

export default App;
