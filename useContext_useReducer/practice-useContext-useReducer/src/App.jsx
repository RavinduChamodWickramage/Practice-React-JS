import "./App.css";
import Login from "./Components/Login";
import UserInput from "./Components/UserInput";
import UserActivity from "./Context/UserActivity";
import UserAuth from "./Context/UserAuth";

function App() {
  return (
    <UserAuth>
      <UserActivity>
        <Login />
        <UserInput />
      </UserActivity>
    </UserAuth>
  );
}

export default App;
