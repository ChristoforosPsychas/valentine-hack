type ButtonProps = {
  answer: string;
  onAnswer: () => void;
};

const Button = ({ answer, onAnswer }: ButtonProps) => {
  return (
    <button onClick={() => onAnswer()}>
      <span>{answer}</span>
    </button>
  );
};

export default Button;
