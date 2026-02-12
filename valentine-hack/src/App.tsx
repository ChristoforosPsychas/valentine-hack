import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  const handleYes = () => {
    setAnswer("yes");
  };
  const handleNo = () => {
    setAnswer("no");
  };

  return (
    <>
      <h1>Will you be my valentine?</h1>
      <div className="card">
        <Button answer="Yes" onAnswer={handleYes} />
        <Button answer="No" onAnswer={handleNo} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
