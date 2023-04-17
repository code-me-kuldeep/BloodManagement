import Table from "./components/Table";
import Cards from "./components/Cards";
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <>
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
