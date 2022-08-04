import { useState } from "react";
import "./App.css";
import MainRoutes from "./Routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
