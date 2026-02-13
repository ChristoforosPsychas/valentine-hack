type ButtonProps = {
  answer: string;
  onClick?: () => void;
};

const Button = ({ answer, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      <span>{answer}</span>
    </button>
  );
};

export default Button;
