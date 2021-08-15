import "./App.css";
import Alert from "./Alert";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisPending(false);
      console.log("apkamu");
    }, 2000);
  }, []);
  return (
    <div className="App">{isPending ? <div>Loading</div> : <Alert />}</div>
  );
}

export default App;
