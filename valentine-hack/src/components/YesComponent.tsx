import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
const YesComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <iframe
        style={{ border: "none" }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xb2fjZa_L74?si=BDPgUHGUWMiiD1cA&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <Confetti
        width={width}
        height={height}
        numberOfPieces={350}
        recycle={false}
        gravity={0.04}
      />
      <p>Good girl.</p>
    </div>
  );
};
export default YesComponent;
