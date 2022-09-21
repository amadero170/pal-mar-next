import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import MapComponent from "../components/MapComponent";

export default function Property({ property }) {
  const attributes = property[0].attributes;

  const handlePdf = (e) => console.log(e, attributes.pdf.data.attributes.url);

  return (
    <>
      <div className="property-header">
        <Image
          alt="imagen"
          src={`http://localhost:1337${attributes.profilepic.data.attributes.url}`}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <h3 className="description">{attributes.description}</h3>
      <div className="property-specs">
        <div className="property-spec-container">
          <h3>Bedrooms</h3>
          <Image
            alt="icon"
            src="/../public/imgs/Icon-bedroom-squared.png"
            height={60}
            width={60}
            layout="fixed"
          ></Image>
          <h3>{attributes.bedrooms}</h3>
        </div>

        <div className="property-spec-container">
          <h3>Bathrooms</h3>
          <Image
            alt="icon"
            src="/../public/imgs/Icon-bathroom-square.png"
            height={60}
            width={60}
            layout="fixed"
          ></Image>
          <h3>{attributes.bathrooms}</h3>
        </div>
        <div className="property-spec-container">
          <h3>Occupation</h3>
          <Image
            alt="icon"
            src="/../public/imgs/Icon-ocuppation-square.png"
            height={60}
            width={60}
            layout="fixed"
          ></Image>
          <h3>{attributes.occupation}</h3>
        </div>
      </div>
      <div className="services-outer-container">
        {attributes.amenities.map((item) => {
          return (
            <div key={item.id} className="service-inner-container">
              <div className="service-title">{item.title}</div>
              <div className="service-details">
                <ReactMarkdown>{item.services_list}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bedroom-details-title">Bedrooms</div>

      <div className="bedrooms-outer-container">
        {attributes.bedrooms_details.map((item) => {
          return (
            <div key={item.id} className="bedrooms-inner-container">
              <div className="bedroom-name">
                <b>{item.bedroom_name}</b>
              </div>
              <div className="bedroom-details">
                <ReactMarkdown>{item.bedroom_details}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </div>
      <div className="property-photo-gallery">
        {attributes.propertyphotos.data.map((item) => {
          return (
            <div className="photo-gallery-card" key={item.id}>
              <Image
                alt="imagen"
                src={`http://localhost:1337${item.attributes.formats.small.url}`}
                placeholder="empty"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          );
        })}
      </div>

      <div className="pdf-button">
        <Link href={`localhost:1337${attributes.pdf.data.attributes.url}`}>
          PDF file
        </Link>
      </div>
      <MapComponent />
    </>
  );
}

//tell next how many pages there are

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/properties`);
  const properties = await res.json();

  const paths = properties.data.map((property) => ({
    params: { slug: property.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const res = await fetch(
    process.env.API_URL + process.env.API_PROPERTIES_POPULATED_ENDPOINT
  );

  const data = await res.json();

  return {
    props: {
      property: data.data.filter((item) => item.attributes.slug === slug),
    },
  };
}
