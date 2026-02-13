type ButtonProps = {
  answer: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
};

const Button = ({ answer, onClick, onMouseEnter }: ButtonProps) => {
  return (
    <button onClick={onClick} onMouseEnter={onMouseEnter}>
      <span>{answer}</span>
    </button>
  );
};

export default Button;
