import { Route, Routes } from "react-router";
import "./App.css"
import Home from "./components/home";
import Login from "./components/login";
import Footer from "./components/footer";

function App() {
  return (
    
   <>
   <Routes>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
   </Routes>
  <Footer />
   </>

  );
}

export default App;
