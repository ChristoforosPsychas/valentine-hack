import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import YesComponent from "./components/YesComponent";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleYes = () => {
    setSelectedAnswer("yes");
  };
  const handleNo = () => {
    setSelectedAnswer("no");
  };

  return (
    <>
      <h1>Will you be my valentine?</h1>
      <div className="card">
        <Button answer="Yes" onAnswer={handleYes} />
        <Button answer="No" onAnswer={handleNo} />
      </div>
      <p className="read-the-docs">
        {selectedAnswer === "yes" && <YesComponent />}
      </p>
    </>
  );
}

export default App;
