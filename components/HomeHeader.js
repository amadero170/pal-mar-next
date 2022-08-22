import Image from "next/image";
import FilterForm from "./FilterForm";
import ImageSlider from "./ImageSlider";

export default function HomeHeader({
  slideArray,
  locations,
  update,
  filteredProperties,
  allProperties,
}) {
  return (
    <div className="header-container">
      <div className="header-image-container">
        <ImageSlider slides={slideArray} />
        <FilterForm
          locations={locations}
          update={update}
          filteredProperties={filteredProperties}
          allProperties={allProperties}
        />
      </div>

      <div className="header-logo-container">
        <Image
          alt="imagen"
          src="/../public/imgs/palmar-hecho.png"
          layout="fixed"
          width={350}
          height={250}
          objectFit="cover"
        ></Image>
        <p className="header-text">Luxury Rentals</p>
      </div>
    </div>
  );
}
