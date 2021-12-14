import { BrowserRouter as Router, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

function App() {
  return ( 
    <Router>
      <Route path="/" element={<Home />} /> 
      <Route path="/room/new" element={<NewRoom />} /> 
    </Router> 
  );
}

export default App;
