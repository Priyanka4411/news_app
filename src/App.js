import { BrowserRouter, Routes, Route } from "react-router-dom";    
import All from "./compo/All";
import Nav from "./compo/Nav";
import Sport from "./compo/Sport";
import Science from "./compo/Science";
import Entern from "./compo/Entern";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        
          <Routes>
            <Route path="/" element={<All />}></Route>
            <Route path="/spo" element={<Sport />}></Route>
            <Route path="/sci" element={<Science />}></Route>
            <Route path="/ent" element={<Entern />}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
