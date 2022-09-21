import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import PropertiesGrid from "../components/PropertiesGrid";

export default function Home({ locations, allPropertiesArray }) {
  const [location, setLocation] = useState("All");
  const [bedrooms, setBedrooms] = useState(0);
  const [occupation, setOccupation] = useState(0);

  const onFilterChange = (data) => {
    if (data.value != "") {
      data.id === "location" && setLocation(data.value);
      data.id === "bedrooms" && setBedrooms(parseInt(data.value));
      data.id === "occupation" && setOccupation(parseInt(data.value));
    } else {
      data.id === "bedrooms" && setBedrooms(0);
      data.id === "occupation" && setOccupation(0);
    }
  };

  let filteredProperties = [...allPropertiesArray];

  let fil = [];
  if (location != "All") {
    fil = filteredProperties
      .filter(
        (item) => item.attributes.location.data.attributes.Area === location
      )
      .filter((item) => item.attributes.bedrooms >= bedrooms)
      .filter((item) => item.attributes.occupation >= occupation);
  } else {
    fil = filteredProperties
      .filter((item) => item.attributes.bedrooms >= bedrooms)
      .filter((item) => item.attributes.occupation >= occupation);
  }

  filteredProperties = fil;

  const profilePicArray = [];

  allPropertiesArray.map((item) => {
    return profilePicArray.push(
      item.attributes.profilepic.data.attributes.formats.large?.url
    );
  });

  const profilePicOkArray = profilePicArray.filter((item) => item != undefined);

  return (
    <>
      <div>
        <HomeHeader
          filteredProperties={filteredProperties}
          locations={locations}
          slideArray={profilePicOkArray}
          onFilterChange={onFilterChange}
        />
        <PropertiesGrid filteredProperties={filteredProperties} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  //get properties names from our api
  const res = await fetch(
    process.env.API_URL + process.env.API_PROPERTIES_POPULATED_ENDPOINT
  );
  const allProperties = await res.json();

  const allPropertiesArray = allProperties.data;

  //get locations names from our api

  const res2 = await fetch(`${process.env.API_URL}/api/locations`);
  const locations = await res2.json();

  return {
    props: {
      allProperties,
      locations,
      allPropertiesArray,
    },
  };
}
