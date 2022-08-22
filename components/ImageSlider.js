import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlider({ slides }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((prev) => (prev + 1 === slides.length ? 0 : prev + 1)),
      5000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Image
      alt="imagen"
      src={`http://localhost:1337${slides[counter]}`}
      layout="fill"
      objectFit="cover"
    ></Image>
  );
}
