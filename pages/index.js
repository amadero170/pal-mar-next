import { useState, useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import PropertiesGrid from "../components/PropertiesGrid";

export default function Home({ locations, allProperties }) {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  // const [currentFilter, setCurrentFilter] = useState({});
  const str = filteredProperties.data.reduce(
    (sum, value) => value.id.toString() + "," + sum
  );
  console.log(str);

  const check = (f) => {
    setFilteredProperties(f);
    console.log("check:", filteredProperties);
    console.log("f", f);
  };
  // useEffect(() => {
  //   console.log(
  //     "desde useEffect en index filteredProperties",
  //     filteredProperties
  //   );
  // }, [filteredProperties]);

  const onFilterChange = (data) => {
    // setCurrentFilter  (data)
    // switch (currentFilter.key) {
    //   case 'location':
    //     console.log('currentFilter.value');
    //     break;
    // case 'bedrooms':
    //     console.log('currentFilter.value');
    //     break;
    // case 'occupation':
    //     console.log('currentFilter.value');
    //     break;
    //   default:
    //     console.log(`no value provided`);
    // }
  };

  const profilePicArray = [];

  allProperties.data.map((item) => {
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
          update={check}
          allProperties={allProperties}
          onFilterChange={onFilterChange}
        />
        <PropertiesGrid key={str} filteredProperties={filteredProperties} />
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
  //get locations names from our api

  const res2 = await fetch(`${process.env.API_URL}/api/locations`);
  const locations = await res2.json();

  return {
    props: {
      allProperties,
      locations,
    },
  };
}
