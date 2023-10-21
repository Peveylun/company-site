import './App.css'
import Services from "./components/Services/Services.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import More from "./components/More/More.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <About></About>
      <More></More>
    </>
  )
}

export default App
