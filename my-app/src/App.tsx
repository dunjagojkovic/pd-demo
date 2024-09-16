import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Nav from "./components/nav/Nav";
import Carousel from "./components/carousel/Carousel";
import { itemsMock } from "./components/carousel/Carousel.mock";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel items={itemsMock} />
      <div className="App-routes">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
