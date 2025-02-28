function App() {
  const firstName = "Ravindu";
  const lastName = "Wickramage";
  const age = 26;

  const displayDeatails = (firstName, lastName, age) => {
    return `She is ${firstName} ${lastName} and She is ${age} years old`;
  };

  const obj = {
    degree: "Bsc in Physical Science",
  };

  const arr = ["CS", "Statistics", "Pure Maths"];

  const list = (
    <ul>
      <li>Second Class</li>
      <li>Upper Division</li>
    </ul>
  );

  return (
    <>
      <div>
        <h1>JSX Basics</h1>
        <p>
          I am {firstName} {lastName} and I am {age} years old
        </p>
      </div>
      <div>
        <p>
          Display Details by function :{" "}
          {displayDeatails("Harshani", "Malsha", 23)}
        </p>
      </div>
      <div>
        <p>Display Details by object : {obj.degree}</p>
      </div>
      <div>
        <p>Display Details by array : {`${arr[0]}, ${arr[1]}, ${arr[2]}`}</p>
      </div>
      <div>{list}</div>
    </>
  );
}

export default App;
