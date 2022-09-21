import Image from "next/image";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function PropertyCard({ attributes, location }) {
  const [currentId, setCurrentId] = useState(0);
  const handleRightClick = () => {
    currentId === attributes.propertyphotos.data.length - 1
      ? (currentId = 0)
      : currentId++;
    setCurrentId(currentId);
  };
  const handleLeftClick = () => {
    currentId === 0
      ? (currentId = attributes.propertyphotos.data.length - 1)
      : currentId--;
    setCurrentId(currentId);
  };
  const handleRoute = () => {
    Router.push(`/${attributes.slug}`);
  };
  return (
    <div className="card" onClick={handleRoute}>
      <div className="card-img-container">
        <span
          className="material-symbols-outlined leftButton"
          onClick={handleLeftClick}
        >
          chevron_left
        </span>
        <Image
          alt="imagen"
          src={`http://localhost:1337${attributes.propertyphotos.data[currentId].attributes.formats.small.url}`}
          placeholder="empty"
          layout="fill"
          objectFit="cover"
        ></Image>
        <span
          className="material-symbols-outlined rightButton"
          onClick={handleRightClick}
        >
          chevron_right
        </span>
      </div>
      <div className="card-data-container">
        <p className="card-data-name">
          {attributes.name} - {location}
        </p>
        <div className="card-data-specs">
          <div className="spec-container">
            <Image
              alt="icon"
              src="/../public/imgs/Icon-bedroom-squared.png"
              height={30}
              width={30}
              layout="fixed"
            ></Image>
            <p>{attributes.bedrooms}</p>
          </div>

          <div className="spec-container">
            <Image
              alt="icon"
              src="/../public/imgs/Icon-bathroom-square.png"
              height={30}
              width={30}
              layout="fixed"
            ></Image>
            <p>{attributes.bathrooms}</p>
          </div>
          <div className="spec-container">
            <Image
              alt="icon"
              src="/../public/imgs/Icon-ocuppation-square.png"
              height={30}
              width={30}
              layout="fixed"
            ></Image>
            <p>{attributes.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
