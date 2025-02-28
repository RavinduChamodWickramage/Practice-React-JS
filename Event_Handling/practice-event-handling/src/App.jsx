import "./App.css";

function App() {
  function hello1() {
    console.log("hello 1");
  }

  const hello2 = () => {
    console.log("hello 2");
  };

  function hello3(name) {
    console.log(`hello 3 ${name}`);
  }

  const hello4 = (name) => {
    console.log(`hello 4 ${name}`);
  };

  return (
    <>
      <button onClick={hello1}>Hello 1</button>
      <button onClick={hello2}>Hello 2</button>
      <button
        onClick={() => {
          hello3("Ravindu");
        }}
      >
        Hello 3
      </button>
      <button
        onClick={() => {
          hello4("Wickramage");
        }}
      >
        Hello 4
      </button>
    </>
  );
}

export default App;
