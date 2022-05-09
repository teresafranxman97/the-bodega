import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Products from "./sections/Products";
import Navbar from "./components/Navbar";

import { AppStyles, GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <AppStyles className="App">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/products" element={<Products />}>

        </Route>
      </Routes>
      <GlobalStyle/>
    </AppStyles>
  );
}

export default App;
