import { useState } from "react";
import Image from "./assets/sticker.jpg";

function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSize = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <img
        src={Image}
        alt="A sticker image"
        onClick={handleSize}
        style={{
          width: isExpanded ? "500px" : "300px",
          height: "auto",
          cursor: "pointer",
          transition: "width 0.5s ease-in, height 0.5s ease-in",
        }}
      />
    </>
  );
}

function Congratulations() {
  return (
    <>
      <h1>Good Job!</h1>
    </>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>The Pretty Little Bear with a Rose</h1>
      <Profile />
      <Profile />
    </section>
  );
}