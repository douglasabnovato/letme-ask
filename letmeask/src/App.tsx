import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
