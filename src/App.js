import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Login />
      </>
    </div>
  );
}

export default App;
