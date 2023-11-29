import "../css/Menu.css";

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play Tetrix
      </button>
    </div>
  );
};

export default Menu;
