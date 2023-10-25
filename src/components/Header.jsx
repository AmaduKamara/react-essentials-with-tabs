import reactImage from "../assets/react-core-concepts.png";
const reactDescription = ["Fundamentals", "Crucial", "Core"];
import "./Header.css";

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
