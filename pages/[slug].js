import Footer from "../layout/Footer";
export default function Property({ property }) {
  return (
    <>
      <div>property id: {property.id}</div>
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
    `${process.env.API_URL}/api/properties?filters[slug][$eq]=${slug}`
  );

  const data = await res.json();

  return {
    props: { property: data.data[0] },
  };
}
