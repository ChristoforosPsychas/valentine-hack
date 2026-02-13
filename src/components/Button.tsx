type ButtonProps = {
  answer: string;
  onClick?: () => void;
};

const Button = ({ answer, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-gray-300 text-fuchsia-900 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <span>{answer}</span>
    </button>
  );
};

export default Button;
