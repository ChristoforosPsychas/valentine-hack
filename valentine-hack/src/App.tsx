import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import YesComponent from "./components/YesComponent";
import NoButton from "./components/NoButton";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const handleYes = () => {
    setSelectedAnswer("yes");
  };

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Will you be my valentine?</h1>
      <div className="card">
        {selectedAnswer !== "yes" && (
          <div>
            <Button answer="Yes" onClick={handleYes} />
            <NoButton onHover={handleCount} />
          </div>
        )}
      </div>
      <p className="read-the-docs">
        {selectedAnswer === "yes" && <YesComponent />}
        {count >= 5 && !selectedAnswer && (
          <p>A worthy effort to catch me, but...futile!</p>
        )}
      </p>
    </>
  );
}

export default App;
