import { useState } from "react";
import "./App.css";
import { images } from "./data";
import { useEffect } from "react";

function App() {
  const [activeImage, setActiveImage] = useState(0);

  const handlePreview = () => {
    if (activeImage <= 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage - (1 % images.length));
    }
  };

  const handleNext = () => {
    setActiveImage((activeImage + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <>
      <div className="container">
        <button onClick={handlePreview}>Preview</button>
        <div className="image-container">
          {images.map((image, index) => {
            return (
              <img
                className={activeImage === index ? "image" : "hide"}
                key={image.id}
                src={image.url}
                alt={image.alt}
                title={image.alt}
              />
            );
          })}
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
