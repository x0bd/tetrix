import Menu from "./Menu";
import useGameOver from "../hooks/useGameOver";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(`Start State: ${gameOver} `);
  };

  return (
    <div className="Game">
      {gameOver ? <Menu onClick={start} /> : <p>TETRIX</p>}
    </div>
  );
};

export default Game;
