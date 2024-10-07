
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"


const App = () => {
  return (<div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
  </div>);
};

export default App;
