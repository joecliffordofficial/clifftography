// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Cart from "./components/Cart";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Header />
      {/* <div className="App"> */}
        <Routes>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path='/cart' component={Cart} />
        </Routes>
        {/*Hellooooooo I'm Back! */}
      {/* </div> */}
    </Router>
    <Footer />
    </div>
  );
}

export default App;
