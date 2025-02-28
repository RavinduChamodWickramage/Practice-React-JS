import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Body>
        <button>Click Here</button>
      </Body>
      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat
          dolorem itaque ipsum quasi minus nam! At asperiores eum, deleniti
          debitis cumque sunt illo necessitatibus? Accusamus quod natus sunt
          doloremque!
        </p>
      </Body>
      <Footer />
    </>
  );
}

export default App;
