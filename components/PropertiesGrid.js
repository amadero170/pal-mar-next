import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ filteredProperties }) {
  console.log("from propgrid:", filteredProperties);

  return (
    <>
      <h2>OUR PROPERTIES:</h2>
      <div className="grid">
        {filteredProperties.data.map((item, idx) => {
          const pic = item.attributes.profilepic.data
            ? item.attributes.profilepic.data.attributes.url
            : "/no-picture";
          const loc = item.attributes.location.data
            ? item.attributes.location.data.attributes.Area
            : "no hay locacion cargada";

          return (
            <PropertyCard
              key={idx}
              location={loc}
              attributes={item.attributes}
              profilepic={pic}
            />
          );
        })}
      </div>
    </>
  );
}
