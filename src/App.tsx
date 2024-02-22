import Details from "./components/Details";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WhyMe from "./components/WhyMe";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Details />
        <WhyMe />
        <Footer/>
      </div>
    </>
  );
}

export default App;
