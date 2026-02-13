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

  const getMessage = (count: number) => {
    if (count >= 15) return "You are mean, little bug.";
    if (count >= 10) return "Perhaps try the 'Yes' button instead? Come on.";
    if (count >= 5) return "A worthy effort, but...futile!";
    return null;
  };

  const message = getMessage(count);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-fuchsia-900">
      <div className="text-gray-300 text-6xl font-bold text-center drop-shadow-lg">
        💗 Will you be my valentine? 💗
      </div>

      {selectedAnswer !== "yes" && (
        <div className="flex gap-4">
          <Button answer="Yes" onClick={handleYes} />
          <NoButton onHover={handleCount} />
        </div>
      )}

      <div className="min-h-[60px]">
        {selectedAnswer === "yes" && <YesComponent />}
        {!selectedAnswer && (
          <p className="text-gray-300 text-xl italic">{message}</p>
        )}
      </div>
    </div>
  );
}

export default App;
