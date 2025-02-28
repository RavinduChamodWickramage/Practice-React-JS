import "./App.css";
import { FaReact, FaHeart, FaSmile } from "react-icons/fa";
import { MdEmail, MdAccessAlarm } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Icons Practice</h1>
          <div className="icon-container">
            <div className="icon-item">
              <FaReact className="icon" />
              <span>React</span>
            </div>
            <div className="icon-item">
              <FaHeart className="icon" />
              <span>Heart</span>
            </div>
            <div className="icon-item">
              <FaSmile className="icon" />
              <span>Smile</span>
            </div>
            <div className="icon-item">
              <MdEmail className="icon" />
              <span>Email</span>
            </div>
            <div className="icon-item">
              <MdAccessAlarm className="icon" />
              <span>Alarm</span>
            </div>
            <div className="icon-item">
              <GiCoffeeCup className="icon" />
              <span>Coffee</span>
            </div>
            <div className="icon-item">
              <IoIosRocket className="icon" />
              <span>Rocket</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
